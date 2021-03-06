import React, {PropTypes, PureComponent} from 'react';


const fakeComponentCreator = name => (props) => <pre><h2>{name}</h2><code>{JSON.stringify(props, null, 4)}</code></pre>

class Layout extends PureComponent {
    render(){
        const {
            AppHeader,
            children,
            ConfirmWrapper,
            ErrorCenter,
            Footer,
            LoadingBar,
            menuType,
            Menu,
            MessageCenter,
            LoadingStatusBar,
            DevTools,
            OtherRootComponent,
            ...otherProps
        } = this.props;
        const componentData = Menu ? { 'data-menu': 'left' } : {};
        return  (
            <div data-focus='layout' {...componentData} {...otherProps}>
                {LoadingBar && <LoadingBar />}
                <MessageCenter {...otherProps}/>
                {ErrorCenter && <ErrorCenter />}
                <AppHeader />
                {Menu && <Menu />}
                <div data-focus='page-content'>
                    {children}
                </div>
                {Footer &&
                    <footer data-focus='footer'>
                        <Footer />
                    </footer>
                }
                {ConfirmWrapper && <ConfirmWrapper />}
                { DevTools && <DevTools /> }
                { OtherRootComponent && <OtherRootComponent /> }
            </div>
        );
    }
};

Layout.defaultProps = {
    AppHeader: fakeComponentCreator('AppHeader'), //default app header.
    MessageCenter: fakeComponentCreator('MessageCenter'), // default message center
    ConfirmWrapper: fakeComponentCreator('ConfirmWrapper') // default confirm wrapper,
};
Layout.PropTypes = {
    AppHeader: PropTypes.func,
    ConfirmWrapper: PropTypes.func,
    ErrorCenter: PropTypes.func,
    Footer: PropTypes.func,
    LoadingBar: PropTypes.func,
    LoadingStatusBar: PropTypes.func,
    Menu: PropTypes.func,
    MessageCenter: PropTypes.func
};
export default Layout;
