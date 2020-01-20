import ReactPlayer from 'react-player'
// import '../../../static/styles/index.scss'
interface IProps {
  url: string;
}

const Video: React.FunctionComponent<IProps> = ({ url }) => (
        <>
          <div className='player-wrapper'>
            <ReactPlayer
              url={url}
              playing={true}
              loop={false}
              controls={false}
              light={true}
              volume={1}
              muted={false}
              // playbackRate={}
              className='react-player'
              width='100%'
              height='100%'
              config={{
                youtube: {
                  playerVars: { showinfo: 1 },
                  preload: true,
                //   embedOptions: {
                //       allowallowfullscreen
                //   }
                },
                facebook: {
                  appId: '12345'
                }
              }} 
            />
          </div>
        </>
);

export default Video