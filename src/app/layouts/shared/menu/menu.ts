import { MenuItem } from './menu.model';

export const ADMIN_MENU: MenuItem[] = [
    {
        label: 'Navigation',
        isTitle: true
    },
    {
        label: 'Dashboard',
        icon: 'home',
        link: '/',
        badge: {
            variant: 'success',
            text: '1',
        }
    },
    {
        label: 'Apps',
        isTitle: true
    },
    {
        label: 'Calendar',
        icon: 'calendar',
        link: '/apps-calendar',
    },
  {
    label: 'Transaction',
    link: '/apps-transaction',
  },
    {
        label: 'Email',
        icon: 'inbox',
        subItems: [
            {
                label: 'Inbox',
                link: '/apps/email-inbox',
            },
            {
                label: 'Read',
                link: '/apps/email-read'
            },
            {
                label: 'Compose',
                link: '/apps/email-compose'
            },
        ]
    },
    {
        label: 'Project',
        icon: 'briefcase',
        subItems: [
            {
                label: 'List',
                link: '/apps/project-list',
            },
            {
                label: 'Detail',
                link: '/apps/project-detail',
            },
        ]
    },
    {
        label: 'Tasks',
        icon: 'bookmark',
        subItems: [
            {
                label: 'List',
                link: '/apps/task-list',
            },
            {
                label: 'Kanban Board',
                link: '/apps/task-board',
            },
        ]
    },
    {
        label: 'Custom',
        isTitle: true
    },
    {
        label: 'Pages',
        icon: 'file-text',
        subItems: [
            {
                label: 'Starter',
                link: '/other/pages-starter'
            },
            {
                label: 'Profile',
                link: '/other/pages-profile'
            },
            {
                label: 'Activity',
                link: '/other/pages-activity'
            },
            {
                label: 'Invoice',
                link: '/other/pages-invoice'
            },
            {
                label: 'Pricing',
                link: '/other/pages-pricing'
            },
            {
                label: 'Error 404',
                link: '/other/pages-error-404'
            },
            {
                label: 'Error 500',
                link: '/other/pages-error-500'
            },
        ]
    },
    {
        label: 'components',
        isTitle: true
    },
    {
        label: 'UI Elements',
        icon: 'package',
        subItems: [
            {
                label: 'Bootstrap UI',
                link: '/ui/bootstrap'
            },
            {
                label: 'Icons',
                link: '/ui/icons',
                subItems: [
                    {
                        label: 'Feather Icons',
                        link: '/ui/icon-feather'
                    },
                    {
                        label: 'Unicons Icons',
                        link: '/ui/icon-unicons'
                    },
                ]
            },
            {
                label: 'Widgets',
                link: '/ui/widgets'
            }
        ]
    },
    {
        label: 'Forms',
        link: '/ui/form',
        icon: 'file-text',
        subItems: [
            {
                label: 'Basic Elements',
                link: '/ui/forms-basic'
            },
            {
                label: 'Advanced',
                link: '/ui/forms-advanced'
            },
            {
                label: 'Validation',
                link: '/ui/forms-validation'
            },
            {
                label: 'Wizard',
                link: '/ui/forms-wizard'
            },
            {
                label: 'Editor',
                link: '/ui/forms-editor'
            },
            {
                label: 'File Uploads',
                link: '/ui/forms-uploads'
            },
        ]
    },
    {
        label: 'Charts',
        link: '/ui/charts',
        icon: 'pie-chart'
    },
    {
        label: 'Tables',
        link: '/ui/tables',
        icon: 'grid',
        subItems: [
            {
                label: 'Basic',
                link: '/ui/tables-basic'
            },
            {
                label: 'Advanced',
                link: '/ui/tables-advanced'
            },
        ]
    }
];
export const MENU: MenuItem[] = [
    {
        label: 'Navigation',
        isTitle: true
    },
    {
        label: 'Dashboard',
        icon: 'home',
        link: '/',
        badge: {
            variant: 'success',
            text: '1',
        }
    },
    {
        label: 'Opérations',
        isTitle: true
    },
  {
    label: 'Transactions',
    // icon: 'inbox',
    subItems: [
      {
        label: 'Envois',
        link: '/transactions-envois',
      },
      {
        label: 'Receptions',
        link: '/transactions-receptions',
      },
      {
        label: 'Toutes les transactions',
        link: '/transactions-toutestransactions',
      },
    ]
  },
  {
    label: 'Transaction',
    link: '/apps-transaction',
  },
    {
        label: 'Dépots',
        link: '/operations-depots',
    },
  {
    label: 'Retraits',
     link: '/operations-retraits',
  },
  {
    label: 'Publications',
    isTitle: true
  },
  {
    label: 'Articles',
    link: '/publications-articles',
  },
  {
    label: 'Catégorie d\'article',
    link: '/publications-categoriearticles',
  },
  {
    label: 'Paramètrages',
    isTitle: true
  },
    // icon: 'inbox',
      {
        label: 'Dévises',
        link: '/parametrages-devises',
      },
      {
        label: 'Modes de dépots',
        link: '/parametrages-modedepots',
      },
  {
        label: 'Modes de retraits',
        link: '/parametrages-moderetraits',
      },
    {
        label: 'Compte utilisateur',
        icon: 'bookmark',
        subItems: [
            {
                label: 'utilisateurs',
                link: '/compteutilisateur-utilisateurs',
            },
            {
                label: 'Roles',
                link: '/compteutilisateur-roles',
            },
          {
                label: 'Permissions',
                link: '/compteutilisateur-permissions',
            },
        ]
    },
];
