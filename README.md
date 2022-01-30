# GuestApplication

[Market Research Report](https://docs.google.com/document/d/1xZdxptCEs5-hoUvDSlnbW_CbBmywLKR8Z1Ls86qBWK0/edit?usp=sharing) (written prior to development)

<img width="300px" src="https://user-images.githubusercontent.com/53918934/151661064-920a1222-1c1b-4c73-922d-5786fa92f556.png"/><img width="300px" src="https://user-images.githubusercontent.com/53918934/151682766-b3f6cb8d-dfb4-4fef-9b92-244d485cecb9.png"><img width="300px" src="https://user-images.githubusercontent.com/53918934/151681713-9f0faab8-ac2b-47aa-8f6e-5f6920bc5616.png"><img width="300px" src="https://user-images.githubusercontent.com/53918934/151661591-1bb31364-a8e4-4f85-9811-832dbbdd124c.png"/><img width="300px" src="https://user-images.githubusercontent.com/53918934/151661692-caa418fe-4184-4b4b-9ebe-47c4f512fc58.png"/><img width="300px" src="https://user-images.githubusercontent.com/53918934/151661051-b03bfc31-ef38-4b52-876a-8d90e9defddd.png"/>

# For whoever's taking over this project:

Fork this repo, as well as, https://github.com/Daggerpov/GuestApplication and feel free to email me (via the contact in my GitHub profile) with questions.

## Development:

1. Install packages defined in package.json file using `yarn install`
2. Ensure you've received the project's `secrets.ts` file and access to the email used for Firebase configuration and the Meta for Developers account (for FaceBook auth)
3. Follow whichever method under using the **React Native CLI** that you'd like in [the documentation](https://reactnative.dev/docs/environment-setup), depending on OS of your machine and emulator. 
4. Use the (or yarn ->)`npx react-native run-ios`(<- or android) command to run the code in development

## Renaming:

[Firebase Public-Facing Name](https://support.google.com/firebase/answer/9137752?hl=en)

[React Native Project](https://stackoverflow.com/questions/32830046/renaming-a-react-native-project)

## QOL:

<ul>
    <li>Use the Better Comments Visual Studio Code extension to see marked ones</li>
    <li>Using the Expo development environment will not work with the react-native-firebase module.</li>
</ul>

### TO-DO:

- since I didn't have an apple paid developer account, when trying to enable push notifications through the method in [this link](https://developers.sap.com/tutorials/fiori-ios-hcpms-push-notifications.html), but it didn't pop up, most likely since I don't have a paid developer account. This impacts the Phone Sign-In screen, since I need to follow the instruction of [this Github answer](https://github.com/invertase/react-native-firebase/issues/557#issuecomment-340404720), which I'm not able to do due to this absence. 
- the Full Name (display name) element in the registration form needs to be added to the Firebase database records
- populate the inner pages of the app with ideas written in the dev-promotermanager channel on Slack
