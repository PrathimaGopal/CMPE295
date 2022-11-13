import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-west-1_yy8crspvc",
    ClientId: "4883cetdq858k0voqftoqc0t53"
}

export default new CognitoUserPool(poolData);