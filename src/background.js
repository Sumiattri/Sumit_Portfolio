import axios from "axios";

export async function removeBackground(imageFile) {
  const formData = new FormData();
  formData.append("image_file", imageFile);
  formData.append("size", "auto");

  const res = await axios.post(
    "https://api.remove.bg/v1.0/removebg",
    formData,
    {
      headers: {
        "X-Api-Key": "YOUR_REMOVE_BG_API_KEY",
      },
      responseType: "blob",
    }
  );

  const imageURL = URL.createObjectURL(res.data);
  return imageURL;
}
