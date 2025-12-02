export default function handler(req, res) {
    const { code, state } = req.query;

    if (!code) {
        return res.status(400).send('No authorization code received.');
    }

    res.status(200).send(`Authorization code: ${code}\nState: ${state || 'N/A'}`);
}
