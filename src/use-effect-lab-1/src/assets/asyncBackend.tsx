
let  profileDelay = 6000;

export async function fetchProfile(username: unknown){
  profileDelay -= 1000;
  const profileValue = `profile-${username}-${profileDelay}`;
  console.log(profileValue);
  return await new Promise((resolve) => setTimeout(()=> resolve([profileValue]), profileDelay));
}