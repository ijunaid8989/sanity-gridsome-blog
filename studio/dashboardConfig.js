export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5db1add73ba64643f1806953',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-nfv31hz1',
                  apiId: 'd6229843-5579-4a5c-be4a-4fafe85b6de9'
                },
                {
                  buildHookId: '5db1add785dcc2f504d5d531',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-mdef8zee',
                  apiId: '6537c67f-c01e-4d6f-8ade-bb0f0ac6de1f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ijunaid8989/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-mdef8zee.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
