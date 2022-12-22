import axios from "axios";

const serverUrl = "https://goalist.xyz/loclog";

export async function loginServer(email: string, password: string) {
  const url = `${serverUrl}/login`;
  try {
    const res = await axios.post(url, { email, password });
    const data = res.data;

    return data;
  } catch (error) {
    console.log(error);
    throw { error: error, message: "Login failed" };
  }
}

export async function registerServer(
  email: string,
  password: string,
  name: string
) {
  const url = `${serverUrl}/register`;
  try {
    const res = await axios.post(url, {
      email,
      password,
      name,
    });
    const data = res.data;

    console.log(data, "from register server");

    return data;
  } catch (error) {
    console.log(error, "from register server");
    throw { error: error, message: "Register failed" };
  }
}

export async function linkModuleServer(id: string, userId: string) {
  console.log("linking", id, userId);
  const url = `${serverUrl}/link/${id}`;
  console.log(url);
  try {
    const res = await axios.post(url, {
      id: userId,
    });

    console.log(res.data);

    return res.data;
  } catch (err) {
    console.log("err fucking ice");
    console.log(err);
    throw err;
  }
}

export async function getUserDataServer(id: string) {
  const url = `${serverUrl}/users/${id}`;
  console.log(url, "uuu[pp[p");
  try {
    const res = await axios.get(url);
    const data = res.data;

    console.log("serdadada", data);
    return data;
  } catch (error) {
    console.log(error);
    throw { error: error, message: "Get user data failed" };
  }
}
