# Insurance Policy App

This project allows users to view vehicle information, enter vehicle owner details, and generate an insurance policy for the vehicle.

See it live from [here](https://insurance-policy-project.vercel.app/).
> **Note:** You should visit the site without any CORS extension.

## Features

- Full responsive
- Read and delete addresses
- Send order with suitable response or retry order
- Input validation
- Close modal with device's back button

## Technologies

- Next Js (App Router)
- Typescript
- Tailwind CSS
- React Query + Axios

## Folder Structuring

In this project we follow the folder structuring based on our folder categoriy.

```bash
.
└── src/
    └── app
    └── assets/
    │    ├── icons
    └── components
    │    ├── ...
    └── config
    │    ├── base-request
    └── hoc
    └── hooks
    └── services
    └── utils
    │    ├── helper
```

## Folders Category

- `app`: all pages.
- `assets`: all of assets related to user interface such icons, images and etc.
- `components`: all of component related to user interacting such Inputs, Buttons, Text fields and etc.
- ‍‍‍‍`config`: All configuration files, such as Axios setup and etc.
- `hoc`: all higher order components such WithQueryClientProvider and etc.
- `hooks`: all custom hooks like useLocalStorageState and etc.
- `services`: all of services related to api call such getAddresses, sendOrder and etc.
- `utils`: all of static data and helper functions such validateNationalId, validatePhoneNumber and etc.

## Setup

After cloning the repository, enter the main directory of the project and run the following command to install the required packages:

```
pnpm install
```

After installing the packages, run the following command to run the program:

```
pnpm run dev
```

After the project is executed, open the following address in your browser and view the website:

http://localhost:3000
