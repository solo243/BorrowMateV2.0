

export const getPosts = async () => {
    const fetcho = await fetch();
    const convert = await fetcho.json();
    const data = convert;
    return data.posts;
}