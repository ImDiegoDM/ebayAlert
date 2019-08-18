interface IProduct {
  mainImage: string;
  name: string;
  price: string;
  itemWebUrl: string;
}
// tslint:disable: max-line-length
export function productTemplate(product: IProduct) {
  return `
  <a style="cursor:pointer;" href="${product.itemWebUrl}">
  <tr>
    <td>
      <div style="width:100px;height:100px;background-image:url('${product.mainImage}');background-position:center;background-size:cover;"/>
    </td>
    <td>
      <table>
        <tr>
          <td>${product.name}</td>
        </tr>
        <tr>
          <td>${product.price}</td>
        </tr>
      </table>
    </td>
  </tr>
  </a>
  `;
}

export function productsTemplate(phrase: string, products: IProduct[]) {
  let p = '';

  for (const product of products) {
    p += productTemplate(product);
  }

  return `
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Ebay alert program</title>
    </head>
    <body>
      <table align="center" cellpadding="0" cellspacing="0" width="100%" style="margin: 15px 0 0 0;">
        <tr>
          <td style="text-align:center">
            Hi check this products that we have found for you base on the phrase ${phrase}
          </td>
        </tr>
      </table>
      <table width="450" style="display: block; margin: 40px auto 0;">
        ${p}
      </table>
    </body>
    </html>
  `;
}
