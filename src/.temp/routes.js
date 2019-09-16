export default [
  {
    path: "/projects/bodypillow",
    component: () => import(/* webpackChunkName: "page--src--templates--contentful-portfolio-page-vue" */ "/Users/jackie/Dropbox (Personal)/jlliu.github.io/src/templates/ContentfulPortfolioPage.vue"),
    meta: { data: true }
  },
  {
    path: "/projects/collaboration-with-12-year-old-self",
    component: () => import(/* webpackChunkName: "page--src--templates--contentful-portfolio-page-vue" */ "/Users/jackie/Dropbox (Personal)/jlliu.github.io/src/templates/ContentfulPortfolioPage.vue"),
    meta: { data: true }
  },
  {
    path: "/projects/lovenotes",
    component: () => import(/* webpackChunkName: "page--src--templates--contentful-portfolio-page-vue" */ "/Users/jackie/Dropbox (Personal)/jlliu.github.io/src/templates/ContentfulPortfolioPage.vue"),
    meta: { data: true }
  },
  {
    path: "/projects/girlswhocode",
    component: () => import(/* webpackChunkName: "page--src--templates--contentful-portfolio-page-vue" */ "/Users/jackie/Dropbox (Personal)/jlliu.github.io/src/templates/ContentfulPortfolioPage.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/creating-my-own-song-inspired-\"niche-memes\"",
    component: () => import(/* webpackChunkName: "page--src--templates--contentful-blog-post-vue" */ "/Users/jackie/Dropbox (Personal)/jlliu.github.io/src/templates/ContentfulBlogPost.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/first-blog-post",
    component: () => import(/* webpackChunkName: "page--src--templates--contentful-blog-post-vue" */ "/Users/jackie/Dropbox (Personal)/jlliu.github.io/src/templates/ContentfulBlogPost.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/understanding-networks",
    component: () => import(/* webpackChunkName: "page--src--templates--contentful-blog-category-vue" */ "/Users/jackie/Dropbox (Personal)/jlliu.github.io/src/templates/ContentfulBlogCategory.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/designing-club-cultures",
    component: () => import(/* webpackChunkName: "page--src--templates--contentful-blog-category-vue" */ "/Users/jackie/Dropbox (Personal)/jlliu.github.io/src/templates/ContentfulBlogCategory.vue"),
    meta: { data: true }
  },
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/jackie/Dropbox (Personal)/jlliu.github.io/src/pages/About.vue"),
    meta: { data: true }
  },
  {
    path: "/blog",
    component: () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/jackie/Dropbox (Personal)/jlliu.github.io/src/pages/Blog.vue"),
    meta: { data: true }
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/jackie/Dropbox (Personal)/jlliu.github.io/src/pages/Index.vue"),
    meta: { data: true }
  },
  {
    path: "/projects",
    component: () => import(/* webpackChunkName: "page--src--pages--projects-vue" */ "/Users/jackie/Dropbox (Personal)/jlliu.github.io/src/pages/Projects.vue"),
    meta: { data: true }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/jackie/Dropbox (Personal)/jlliu.github.io/node_modules/gridsome/app/pages/404.vue"),
    meta: { data: true }
  },
  {
    path: "/blog-post/:slug",
    component: () => import(/* webpackChunkName: "page--src--templates--contentful-blog-post-vue" */ "/Users/jackie/Dropbox (Personal)/jlliu.github.io/src/templates/ContentfulBlogPost.vue"),
    meta: { data: true }
  },
  {
    path: "/portfolio-page/:slug",
    component: () => import(/* webpackChunkName: "page--src--templates--contentful-portfolio-page-vue" */ "/Users/jackie/Dropbox (Personal)/jlliu.github.io/src/templates/ContentfulPortfolioPage.vue"),
    meta: { data: true }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/jackie/Dropbox (Personal)/jlliu.github.io/node_modules/gridsome/app/pages/404.vue"),
    meta: { data: true }
  }
]

