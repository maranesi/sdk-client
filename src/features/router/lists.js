import List from 'features/datatable/List';

export function getListRoutes(configs) {
  return configs.map((parameters) => {
    return {
      path: `/${parameters.domain}`,
      component: List,
      attributes: {
        parameters,
      },
    };
  });
}
