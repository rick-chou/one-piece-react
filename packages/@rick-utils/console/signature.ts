import chalk from 'chalk';
import figlet from 'figlet';

type Params = {
  text: string;
  output?: boolean;
};

export const signature = ({ text, output = true }: Params) => {
  return new Promise((resolve, reject) => {
    figlet.text(
      text,
      {
        font: 'Larry 3D', // Larry 3D | Larry 3D 2
        horizontalLayout: 'fitted',
        verticalLayout: 'default',
        width: 120,
        whitespaceBreak: true,
      },
      (err: Error, data: string) => {
        if (err) {
          reject(err);
        }
        if (output) {
          console.log(chalk.blueBright(data));
        }
        resolve(chalk.blueBright(data));
      },
    );
  });
};
