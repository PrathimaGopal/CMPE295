import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_bcvbX1ffR",
    ClientId: "65a7usugddmnq3u4rm7a3u42cs"
}

export default new CognitoUserPool(poolData);