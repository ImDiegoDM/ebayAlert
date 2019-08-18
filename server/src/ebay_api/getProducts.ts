import https from 'https';
import { apiUrl } from './apiUrl';
import { token } from './ebayToken';

interface IProduct {
  mainImage: string;
  name: string;
  price: string;
  itemWebUrl: string;
}

export function getProducts(keyword: string): Promise<IProduct[]> {
  return new Promise((res, rej) => {

    https.get(`${apiUrl}/item_summary/search?q=${keyword}&sort=price&limit=3`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }, (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received.
      resp.on('end', () => {
        if (resp.statusCode >= 200 && resp.statusCode < 300) {
          res(mapProducts(JSON.parse(data)));
          return;
        }

        rej(JSON.parse(data));
      });
    }).on('error', (err) => {
      rej(err);
    });
  });
}

function mapProducts(resp: any) {
  return resp.itemSummaries.map((product: any) => {
    return {
      itemWebUrl: product.itemWebUrl,
      mainImage: product.image.imageUrl,
      name: product.title,
      price: `${product.price.currency} ${product.price.value}`,
    };
  });
}
