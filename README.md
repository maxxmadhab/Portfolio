# Portfolio

## Deployment environment

Frontend on Vercel:

```text
VITE_API_URL=https://portfolio-vt0d.onrender.com
```

Backend on Render:

```text
CLIENT_URL=https://port-opal-beta.vercel.app
```

The frontend also has `portfolio/client/.env.production` so Vite production builds use the Render API URL. The backend keeps `CLIENT_URL` support and also allows the deployed Vercel URL plus local Vite development.
