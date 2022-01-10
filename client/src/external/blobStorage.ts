const url = 'https://notesstorage.blob.core.windows.net/';

export const blobStorage = {
  get: (suffix: string) => {
    return `${url}${suffix}`;
  },
};
