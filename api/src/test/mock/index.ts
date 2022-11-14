import { ICategoriesRequest, ICategoriesResponse, IProductsRequest, IUsersRequest, IProductsResponse, IUsersResponse } from "../../interfaces";


const userMockAdm: IUsersRequest = {
    email: "emailAdmUser@gmail.com",
    name: "nameAdmUser",
    password: "passwordAdmUser",
    isAdm: true,
}
const userMockAdmImage: IUsersRequest = {
    email: "emailAdmUser@gmail.com",
    name: "nameAdmUser",
    password: "passwordAdmUser",
    isAdm: true,
    image_url:"urlimage"
}

const userMockNotadm: IUsersRequest = {
    email: "emailIsNotAdmUser@gmail.com",
    name: "nameIsNotAdmUser",
    password: "passwordIsNotAdmUser",
}

const userMockNotadmImage: IUsersRequest = {
    email: "emailIsNotAdmUser@gmail.com",
    name: "nameIsNotAdmUser",
    password: "passwordIsNotAdmUser",
    image_url: "urlimage"
}

export { userMockAdm, userMockAdmImage, userMockNotadm, userMockNotadmImage}