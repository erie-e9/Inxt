import AppsGridComponent from './appsgrid'
interface IProps {

}

// @ts-ignore
const AppsComponent: React.FunctionComponent<IProps> = ({ data }: any) => {
  return (
    <>
      <AppsGridComponent />
    </>
  )
}

export default AppsComponent