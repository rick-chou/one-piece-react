import { GithubOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { key, repo } from './const';

const RickPlayGround = () => {
  return (
    <div className="bg-white">
      <Button icon={<GithubOutlined />} onClick={() => window.open(repo)}>
        {key}
      </Button>
    </div>
  );
};

export default RickPlayGround;
