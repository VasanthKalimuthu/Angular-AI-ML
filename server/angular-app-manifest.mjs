
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Angular-AI-ML/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Angular-AI-ML/login",
    "route": "/Angular-AI-ML"
  },
  {
    "renderMode": 2,
    "route": "/Angular-AI-ML/login"
  },
  {
    "renderMode": 2,
    "route": "/Angular-AI-ML/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8377, hash: '88abecc6d00e6f9ea79e76bac19babc2e8845efa7d941fcd598bb0a18c6b9a25', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1125, hash: '8120c78f6e94ef072f554db2003b4cfabb7854a9f959fe620828be7ce2cb3676', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 17752, hash: '6155abac738d8577303fcad35e4f8d4015cfe62d9710c15bdfe71bef4d35a5c9', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 102123, hash: 'f6649e127f3ac0e0e943d54ec7dd947d07ab390422b2339a11cae47e169d9e08', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-MZUNP7RO.css': {size: 559717, hash: '4D9pSOXotkU', text: () => import('./assets-chunks/styles-MZUNP7RO_css.mjs').then(m => m.default)}
  },
};
