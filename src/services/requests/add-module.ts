import axios from "axios";

export async function AddModule(id: string, userId: string) {
  try {
    const res = await axios.post("https://goalist.xyz/loclog/addModule" + id, {
      userId,
    });

    return res.data;
  } catch (err) {
    console.log("err fucking ice");
    console.log(err);
    return { error: err };
  }
}
