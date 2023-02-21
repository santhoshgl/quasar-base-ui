import { buildRequestData, REQUEST_METHODS } from 'src/boot/axios';
import { Loading, Notify } from 'quasar';

// API Call handler for REST API's
export async function handleApiCall({
  loader = true,
  method = REQUEST_METHODS.GET,
  endpoint,
  schemaType,
  params,
  payload,
  onSuccess,
  onError
} = {}) {
  !!loader && Loading.show();
  const result = { success: false, status: null };

  try {
    let apiResult = null;

    switch (method) {
      case 'get':
      case 'delete':
        apiResult = await request[method](endpoint, params);
        break;
      case 'deleteWithData':
        apiResult = await request[method](endpoint, {
          data: buildRequestData(schemaType, payload),
          params
        });
        break;
      case 'put':
      case 'post':
      case 'patch':
        apiResult = await request[method](
          endpoint,
          buildRequestData(schemaType, payload)
        );
        break;
    }

    const {
      data: { data, meta, links },
      status
    } = apiResult || {};

    if (!!onSuccess) {
      onSuccess({ data, meta, links });
    }

    result.success = true;
    result.status = status;
  } catch (error) {
    console.error({ error });

    const {
      response: { status, data }
    } = error;

    if (!!onError) {
      onError({ status, data });
    }

    result.status = status;
  } finally {
    !!loader && Loading.hide();
    return result;
  }
}

export function getIconData({
  icon,
  stroke = 'currentColor',
  strokeWidth = 2,
  fill = 'none'
}) {
  const styles = {
    ...icon.style,
    stroke: stroke,
    'stroke-width': strokeWidth,
    fill: fill
  };

  const iconStyles = Object.entries(styles)
    .map(([key, value]) => {
      return `${key}:${value}`;
    })
    .join(';');

  const data = icon.path
    .map(path => {
      return `${path}@@${iconStyles}`;
    })
    .join('&&');

  return data;
}

export function showErrorNotification({
  message = 'Something went wrong!',
  caption = 'Please try again after sometime'
} = {}) {
  Notify.create({
    type: 'negative',
    message,
    caption
  });
}

export function showSuccessNotification({ message, caption = '' } = {}) {
  Notify.create({
    type: 'positive',
    message,
    caption
  });
}

export function showWarningNotification({ message, caption = '' } = {}) {
  Notify.create({
    type: 'warning',
    message,
    caption
  });
}
