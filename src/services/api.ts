import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.REACT_APP_NOTION_API_KEY });


interface apiProps {
    title: string;
    value: number;
    category: string;
    type: string;
}

export default async function handler(data: apiProps): Promise<void> {
    console.log(process.env.REACT_APP_NOTION_DATABASE_ID)
    const response = await notion.pages.create({
        parent: {
            // type: "database_id",
            database_id: process.env.REACT_APP_NOTION_DATABASE_ID || '',
        },
        properties: {
            title: {
                title: [
                    {
                        text: {
                            content: data.title
                        }
                    }
                ]
            }
        }


    });
    console.log(response);
};