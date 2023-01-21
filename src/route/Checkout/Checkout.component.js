import {
    Checkout as SourceCheckout,
} from 'SourceRoute/Checkout/Checkout.component';
import ContentWrapper from 'Component/ContentWrapper';
import './Checkout.extension.style'
import CheckoutProgressBar from 'Component/CheckoutProgressBar';

/** @namespace Scandipwa/Route/Checkout/Component */
export class CheckoutComponent extends SourceCheckout {
   
    loggingStep(){
        const { checkoutStep } = this.props;
        console.log(checkoutStep);
    }
    renderCheckoutProgressBar(){
        const { checkoutStep } = this.props;
        return(
            
            <CheckoutProgressBar checkoutStep={checkoutStep} />
        )
    }
    render() {
        return (
            <>
            <main block="Checkout">
                {this.renderCheckoutProgressBar()}
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                  >
                    {this.loggingStep()}
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
            </>
        );
    }
}

export default CheckoutComponent;
