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
                  buildHookId: '5f55d80a1e2b2f5db5b67371',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kmih9ox5',
                  apiId: '0220a3d0-752b-486c-8965-01f16f822e96'
                },
                {
                  buildHookId: '5f55d80bcbf55bf9a13a3dd2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-akdyi4oq',
                  apiId: '9d3981f3-2dba-45dd-bdb2-190e29912632'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bryannck/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-akdyi4oq.netlify.app', category: 'apps'}
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
