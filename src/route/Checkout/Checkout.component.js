import {
    Checkout as SourceCheckout,
} from 'SourceRoute/Checkout/Checkout.component';
import ContentWrapper from 'Component/ContentWrapper';
import './Checkout.extension.style'
import CheckoutProgressBar from 'Component/CheckoutProgressBar';

/** @namespace Scandipwa/Route/Checkout/Component */
export class CheckoutComponent extends SourceCheckout {
    constructor(props){
        super(props);
        this.state={
            percentage: 100
        }
    }
    render() {
        return (
            <>
            <main block="Checkout">
                <CheckoutProgressBar percentage={this.state.percentage}/>
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                  >
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
