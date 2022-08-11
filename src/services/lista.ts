import axios from 'axios';

interface apiProps {
  title: string;
  value: number;
  category: string;
  type: string;
}

export default async function handler(data: apiProps): Promise<void> {
  console.log(process.env.NOTION_API_KEY)
  const options = {
    method: 'POST',
    url: 'https://api.notion.com/v1/pages',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      Authorization: 'Bearer secret_KDNo9IyJOtkIaUcmIf4T6mp4ABytBg8OBWBV7MZLCzO',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      parent: { type: 'database_id', database_id: "791ec348066f4b2083ba5bc1c609e270" },
      properties: {
        "title": {
          "title": [
            {
              "text": {
                "content": data.title
              }
            }
          ]
        }
      }
    }
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

};