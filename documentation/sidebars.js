/**
 * * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'welcome',
      label: 'Welcome'
    },
    {
      type: 'category',
      label: 'Services',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Audit Trail Gateway',
          items: [
            {
              type: 'doc',
              id: 'services/audit-trail-gateway/introduction',
              label: 'Introduction'
            },
            'services/audit-trail-gateway/API-definition',
            'services/audit-trail-gateway/use-cases'
          ]
        },
        {
          type: 'category',
          label: 'SSI Bridge',
          items: [
            {
              type: 'doc',
              id: 'services/SSI-bridge/introduction',
              label: 'Introduction'
            },
            'services/SSI-bridge/API-definition',
            'services/SSI-bridge/use-cases'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting_started/overview',
        {
          type: 'category',
          label: 'Node.js',
          items: ['getting_started/installation/nodejs/local_setup']
        },
        {
          type: 'category',
          label: 'Java',
          items: ['getting_started/installation/java/local_setup']
        },
        {
          type: 'category',
          label: 'Kubernetes',
          items: [
            'getting_started/installation/kubernetes/local_setup',
            'getting_started/installation/kubernetes/configuration',
            'getting_started/installation/kubernetes/expose_apis'
          ]
        },
        {
          type: 'category',
          label: 'Docker Compose',
          items: [
            'getting_started/installation/docker_compose/docker_compose',
            'getting_started/installation/docker_compose/expose_apis'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Basics',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Authentication',
          items: [
            'basics/authentication/concept',
            'basics/authentication/example_node',
            'basics/authentication/example_is_sdk',
            'basics/authentication/example_java',
          ]
        },
        'basics/identity',
        'basics/streams'
      ]
    },
    {
      type: 'category',
      label: 'Examples',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Node.js',
          items: ['examples/node/introduction',
          'examples/node/how-to-run-examples',
          'examples/node/create-identity-and-credentials',
          'examples/node/update-users',
          'examples/node/delete-users',
          'examples/node/trusted-authorities',
          'examples/node/create-channel',
          'examples/node/authorize-to-channel',
          'examples/node/search-channel-and-validate-data'
        ]
        },
        {
          type: 'category',
          label: 'Java',
          items: ['examples/java/introduction',
          'examples/java/how-to-run-examples',
          'examples/java/create-identity-and-credentials',
          'examples/java/update-users',
          'examples/java/delete-users',
          'examples/java/trusted-authorities',
          'examples/java/create-channel',
          'examples/java/authorize-to-channel',
          'examples/java/search-channel-and-validate-data'
        ]
        },
        
      ]
    },
    {
      type: 'doc',
      id: 'api_reference',
      label: 'API Reference'
    },
    {
      type: 'doc',
      id: 'troubleshooting',
      label: 'Troubleshooting'
    },
    {
      type: 'doc',
      id: 'faq',
      label: 'FAQ'
    },
    {
      type: 'doc',
      id: 'contribute',
      label: 'Contribute'
    },
    {
      type: 'doc',
      id: 'contact',
      label: 'Contact'
    }
  ]
};
