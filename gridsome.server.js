// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// const contentful = require('contentful');



// var client = contentful.createClient({
//   space: 't9p4c9x03bar',
//   accessToken: '13f8aeca80c777b1e2991e2cfe37175daba1fd946552e12e57bb93097c221bc4'
// })

// console.log(contentful);
// console.log(client);


module.exports = function (api) {
  //create pages for every portfolio page
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allContentfulPortfolioPage {
        edges {
          node {
            id
            slug
            title
            description
            timePeriod
            workType
            coverphoto {
              file {
                url
              }
            }
          }
        }
      }
    }

    `);
    console.log(data);
    data.allContentfulPortfolioPage.edges.forEach(({ node }) => {
      createPage({
        path: `/projects/${node.slug}`, 
        component: './src/templates/ContentfulPortfolioPage.vue',
        context: {
          id: node.id,
          description: node.description,
          title: node.title,
          coverphoto: node.coverphoto.file.url,
          timePeriod: node.timePeriod,
          workType: node.workType
        }
      })
    })
  });


//Create pages for every blog post
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allContentfulBlogPost {
        edges {
          node {
            id
            title
            bodyText
            createdAt
            tags {
              name
            }
          }
        }
      }
    }
    `)

    data.allContentfulBlogPost.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.title.replace(/ /g,"-").toLowerCase()}`, 
        component: './src/templates/ContentfulBlogPost.vue',
        context: {
          id: node.id,
          bodyText: node.bodyText,
          title: node.title,
          createdAt: node.createdAt,
          tags: node.tags
        }
      })
    })
  });

  //Create a page for each blog tag
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allContentfulBlogTag {
        edges {
          node {
            id
            name
          }
        }
      }
    }
    `)

    data.allContentfulBlogTag.edges.forEach(({ node }) => {
      var slug = node.name.replace(/ /g,"-");
      console.log(`/blog/${node.name.replace(/ /g,"-").toLowerCase()}`);
      createPage({
        path: `/blog/${node.name.replace(/ /g,"-").toLowerCase()}`, 
        component: './src/templates/ContentfulBlogCategory.vue',
        context: {
          id: node.id,
          name: node.name
        }
      })

    })
  });



}



