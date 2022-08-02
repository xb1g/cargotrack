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

export async function saveModuleServer(module: any) {
  try {
    const res = await axios.put(
      "https://goalist.xyz/loclog/modules/" + module.id,
      {
        module,
      }
    );

    return res.data;
  } catch (err) {
    console.log("err fucking ice");
    console.log(err);
    return { error: err };
  }
}

export async function triggerModuleServer(id: string, stop?: boolean) {
  try {
    const res = await axios.get(
      "https://goalist.xyz/loclog/modules/" +
        id +
        "/trigger" +
        (stop ? "?stop=1" : "")
    );

    return res.data;
  } catch (err) {
    console.log("err fucking ice");
    console.log(err);
    return { error: err };
  }
}
