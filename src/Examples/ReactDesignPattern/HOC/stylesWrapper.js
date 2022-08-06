import commonStyles from './commonStyles'

const translateProps = (props) => {
    console.log("props>>>",props)
     let __styles = { ...commonStyles.default };
     if (props.disable) {
       __styles = { ...__styles, ...commonStyles.disable };
     }
  
     const newProps = {...props, styles:__styles}
     return newProps;

}
const stylesWrapper = (WrapperCompoent)=>{
    return (m) =>{
        return WrapperCompoent(translateProps(m));
    }
}

export default stylesWrapper;