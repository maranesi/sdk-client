import Registration from 'features/registration/Registration';
export function getRegistrationRoutes(configs) {
  return configs.map((parameters) => {
    return {
      path: `/${parameters.domain}/:id`,
      component:
        parameters.customPages && parameters.customPages.registration
          ? parameters.customPages.registration
          : Registration,
      attributes: {
        parameters,
      },
    };
  });
}
