import {
    Checkout as SourceCheckout,
} from 'SourceRoute/Checkout/Checkout.component';
import ContentWrapper from 'Component/ContentWrapper';
import './Checkout.extension.style'
import CheckoutProgressBar from 'Component/CheckoutProgressBar';
const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
    { bgcolor: "#00695c", completed: 30 },
    { bgcolor: "#ef6c00", completed: 53 },
  ];
/** @namespace Scandipwa/Route/Checkout/Component */
export class CheckoutComponent extends SourceCheckout {
    render() {
        return (
            <>
            <main block="Checkout">
            {testData.map((item, idx) => (
        <CheckoutProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
                <CheckoutProgressBar/>
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
