import { ObjectId } from 'bson';
import moment from 'moment';
import { getProducts } from './ebay_api';
import { sendTextEmail, sendHtmlEmail } from './mailer/mailer';
import { productsTemplate } from './mailer/template';
import { getAll, ISearchPhrase, update } from './model/search_phrases';

export async function handleCron() {
  const allPhrases = await getAll();

  for (const searchPhrase of allPhrases) {
    const time = moment(searchPhrase.lastTimeSent);
    const dif = moment().diff(time, 'minute');

    if (dif >= parseInt(searchPhrase.howOften, 10)) {
      try {
        const products = await getProducts(searchPhrase.phrase);

        const template = productsTemplate(searchPhrase.phrase, products);

        await sendHtmlEmail(searchPhrase.email, 'Ebay products alert', template);

        const now = moment().format('YYYY-MM-DD HH:mm');

        await update({_id: new ObjectId(searchPhrase._id)}, {lastTimeSent: now});

      } catch (error) {
        console.log(error);
        console.log('opss.. it seems have ocurred an error trying to send a email');
      }
    } else {
      console.log(`dif: ${dif}, howOften: ${searchPhrase.howOften}`);
    }

  }
}
