import { updatehero } from "../../redux/operations";
import {
  Button,
  Form,
  ButtonDeleteImage,
  ImgThumb,
  ImgWrapper,
  Input,
  Label,
  Textarea,
} from "../AddForm/AddForm.styled";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Field, Formik } from "formik";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { selectLoading } from "../../redux/selectors";
import { getHeroDetails } from "../../services/getHeroDetails";

function UpdateForm() {
  const { id } = useParams();
  const [hero, setHero] = useState(null);

  const [imgUrl, setImgUrl] = useState([]);
  const [file, setFile] = useState([]);
  const [isSucces, setIsSucces] = useState(false);
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    getHeroDetails(id)
      .then((res) => {
        console.log("res :>> ", res);
        setFile(res.images);
        setHero(res);

        return;
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    const fileReaders = [];
    let isCancel = false;

    if (file.length) {
      const promises = file.map((file) => {
        if (typeof file === "string") {
          return file;
        }
        console.log("file :>> ", file);
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReaders.push(fileReader);
          fileReader.onload = (e) => {
            const { result } = e.target;
            if (result) {
              resolve(result);
            }
          };
          fileReader.onabort = () => {
            reject(new Error("File reading aborted"));
          };
          fileReader.onerror = () => {
            reject(new Error("Failed to read file"));
          };
          fileReader.readAsDataURL(file);
        });
      });
      Promise.all(promises)
        .then((images) => {
          if (!isCancel) {
            setImgUrl(images);
          }
        })
        .catch((reason) => {
          console.log(reason);
        });
    }
  }, [file]);

  if (!hero) return null;

  const handleOnChange = (event) => {
    event.preventDefault();
    if (event.target.files && event.target.files.length > 0) {
      let images = [...file];
      for (let i = 0; i < event.target.files.length; i++) {
        images.push(event.target.files[i]);
      }

      setFile(images);
      return;
    }
    return;
  };
  const handleSubmit = (values, { resetForm }) => {
    let updateData = new FormData();
    console.log("object :>> ", values.nickname);

    updateData.append("nickname", values.nickname);
    updateData.append("real_name", values.real_name);
    updateData.append("origin_description", values.origin_description);
    updateData.append("superpowers", values.superpowers);
    updateData.append("catch_phrase", values.catch_phrase);

    for (let i = 0; i < file.length; i++) {
      updateData.append("image", file[i]);
      console.log(`${i}`, file[i]);
    }

    try {
      dispatch(updatehero({ id, updateData }));

      resetForm();
      setImgUrl([]);
      setIsSucces(true);
    } catch (error) {
      console.log(error);
    }
  };

  const removeImg = (event) => {
    const id = event.currentTarget.id;

    const newList = [...file];
    newList.splice(id, 1);
    if (newList.length === 0) {
      setFile([]);
      setImgUrl([]);
      return;
    }

    setFile(newList);
  };

  return (
    <>
      {isLoading && <b>....In process</b>}

      {!isLoading && isSucces && <Navigate to={`/hero/${id}`} replace={true} />}

      <Formik initialValues={hero} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <Label htmlFor="nickname">Nickname</Label>
            <Input type="text" name="nickname" placeholder="Nickname" />
            <Label htmlFor="real_name">Real Name</Label>
            <Input type="text" name="real_name" placeholder="Real Name" />
            <Label htmlFor="origin_description">Description</Label>
            <Textarea
              type="text"
              component="textarea"
              name="origin_description"
              placeholder="Description"
            />
            <Label htmlFor="superpowers">Superpowers</Label>
            <Input type="text" name="superpowers" placeholder="Superpowers" />
            <Label htmlFor="catch_phrase">Catch Phrase</Label>
            <Input type="text" name="catch_phrase" placeholder="Catch Phrase" />
            <div>
              <Label htmlFor="file">Upload images</Label>
              <Field
                type="file"
                id="file"
                name="images"
                value=""
                onChange={handleOnChange}
                accept="image/png, image/jpg, image/jpeg"
                multiple
              />

              {imgUrl.length > 0 ? (
                <ImgWrapper>
                  {imgUrl.map((image, idx) => {
                    return (
                      <div key={idx} style={{ position: "relative" }}>
                        <ImgThumb src={image} alt="" key={idx} id={idx} />
                        <ButtonDeleteImage
                          id={idx}
                          type="button"
                          onClick={removeImg}
                        >
                          <AiOutlineClose />
                        </ButtonDeleteImage>
                      </div>
                    );
                  })}
                </ImgWrapper>
              ) : null}
            </div>
            <Button type="submit" onSubmit={handleSubmit}>
              UPDATE
            </Button>
          </Form>
        )}
      </Formik>
      {/* )} */}
    </>
  );
}

export default UpdateForm;
