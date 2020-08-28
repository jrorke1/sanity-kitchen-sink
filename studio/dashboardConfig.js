export default {
  widgets: [
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
                  buildHookId: '5f49475586daaf003ede242d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3sx1oe91',
                  apiId: 'e2f6fa6b-c4ae-45c9-ac02-adcd9487da74'
                },
                {
                  buildHookId: '5f494755ae6653feb3f69328',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-t5q9v5zw',
                  apiId: '54060132-2c62-40a5-b721-c702d6338941'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jrorke1/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-t5q9v5zw.netlify.app', category: 'apps'}
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
