import { ObjectId } from 'bson';
import moment from 'moment';
import { sendTextEmail } from './mailer/mailer';
import { getAll, ISearchPhrase, update } from './model/search_phrases';

export async function handleCron() {
  const allPhrases = await getAll();

  for (const searchPhrase of allPhrases) {
    const time = moment(searchPhrase.lastTimeSent);
    const dif = moment().diff(time, 'minute');

    if (dif >= parseInt(searchPhrase.howOften, 10)) {
      await sendTextEmail(searchPhrase.email, 'Ebay products alert', `send email products from ${searchPhrase.phrase}`)
      .catch((err) => console.log(`eamil error: ${err}`));

      const now = moment().format('YYYY-MM-DD HH:mm');

      console.log(now);

      await update({_id: new ObjectId(searchPhrase._id)}, {lastTimeSent: now})
        .catch((err) => console.log(`update error: ${err}`));

    }
    console.log(`saved time:${time.format('HH:mm')} cusrrent time:${moment().format('HH:mm')} passed ${dif} minutes`);
  }
}
