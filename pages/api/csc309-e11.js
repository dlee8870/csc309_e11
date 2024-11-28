import { getUTorId } from '../../scripts';

export default function handler(req, res) {
    const utorid = getUTorId();
    res.status(200).send(`
      <div id="auto-tester">
        Hi. I am ${utorid}, and I have learned how to develop a full-stack web app
        and deploy it!
      </div>
    `);
}