"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const emailTemplate_1 = require("../../api/models/emailTemplate");
class CreateEmailTemplate {
    seed(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const em = connection.createEntityManager();
            const registerData = "Dear {name},<br/><br/> <p style='margin-bottom:.5em; margin: 0 0 10px 0;text-indent: 50px'> Thank you for expressing your interest and registering with Spurtcommerce, the faster roadway for a smarter eCommerce drive.   </p>";
            const fogotPasswordData = "Dear {name},<br/><br/>        <p style='margin-bottom:.5em; margin: 0 0 10px 0;text-indent: 50px'> Your new Password is :  {xxxxxx}  </p>";
            const contactUsData = "Dear Admin,<br/><br/>        <p style='margin-bottom:.5em; margin: 0 0 10px 0;text-indent: 50px'> You just received an enquiry from {name} and the details are here: <br> Details: <br> Email: {email}, <br> Phone Number : {phoneNumber}, <br> Message : {message}.  </p>";
            const createCustomerData = 'Dear {name},<br/><br/>   ' +
                ' We are glad to inform you that Spurtcommerce  has added you as Customer.Here are your User Credentials for logging into the Application <br>' +
                "     <p style='margin-bottom:.5em; margin: 0 0 10px 0;'>  User ID : {username}</p>     " +
                "   <p style='margin-bottom:.5em; margin: 0 0 10px 0;'>  Password : {password}</p> <br/>        " +
                "<p style='margin-bottom:.5em; margin: 0 0 10px 0;text-indent: 50px'> You may login using the above Email Id and Password. </p>";
            const customerOrderData = "Dear {name},        </td>    </tr>    <tr>        <td dir='ltr' style='padding:0 0px;color:#078e05;font-weight:400;text-align:left;font-size:16px;line-height:1.5rem;padding-top:10px;font-family: 'Roboto', sans-serif;' valign='top'> Order successfully placed.        </td>    </tr>   " +
                " <tr>        <td dir='ltr' style='padding:0 0px;color:#000;font-weight:300;text-align:left;font-size:12px;line-height:1.2rem;padding-top:10px;font-family: 'Roboto', sans-serif;' valign='top'> You have successfully placed an order for customization services. Kindly find the following details on the placed order.    </tr></tbody></table></td></tr> ";
            const adminNotifyData = "Dear Mr.Admin,        </td>    </tr>    <tr>        <td dir='ltr' style='padding:0 0px;color:#078e05;font-weight:400;text-align:left;font-size:16px;line-height:1.5rem;padding-top:10px;font-family: 'Roboto', sans-serif;' valign='top'> A new order has been placed.         </td>    </tr>    <tr>    " +
                "    <td dir='ltr' style='padding:0 0px;color:#000;font-weight:300;text-align:left;font-size:12px;line-height:1.2rem;padding-top:10px;font-family: 'Roboto', sans-serif;' valign='top'> The new order {orderId} from the Customer {name} has been successfully placed. Kindly find the following details on the placed order.    </tr> </tbody></table></td> </tr> ";
            const statusData = [{
                    emailTemplateId: 1,
                    title: 'Register Content',
                    subject: 'Registration Successfully',
                    content: registerData,
                    isActive: 1,
                },
                {
                    emailTemplateId: 2,
                    title: 'Forgot Password Content',
                    subject: 'Forgot Password',
                    content: fogotPasswordData,
                    isActive: 1,
                },
                {
                    emailTemplateId: 3,
                    title: 'Contact Content',
                    subject: 'ContactUs',
                    content: contactUsData,
                    isActive: 1,
                },
                {
                    emailTemplateId: 4,
                    title: 'Create Customer Content',
                    subject: 'User Login',
                    content: createCustomerData,
                    isActive: 1,
                },
                {
                    emailTemplateId: 5,
                    title: 'Customer Order Content',
                    subject: 'Details of your recent Order',
                    content: customerOrderData,
                    isActive: 1,
                },
                {
                    emailTemplateId: 6,
                    title: 'Admin Mail Content',
                    subject: 'Congratulations on your recent order',
                    content: adminNotifyData,
                    isActive: 1,
                },
            ];
            let i = 0;
            for (i; i < statusData.length; i++) {
                const emailData = new emailTemplate_1.EmailTemplate();
                emailData.emailTemplateId = statusData[i].emailTemplateId;
                emailData.title = statusData[i].title;
                emailData.subject = statusData[i].subject;
                emailData.content = statusData[i].content;
                emailData.isActive = statusData[i].isActive;
                yield em.save(emailData);
            }
            return statusData;
        });
    }
}
exports.CreateEmailTemplate = CreateEmailTemplate;
//# sourceMappingURL=CreateEmailTemplate.js.map