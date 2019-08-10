import { Connection } from 'typeorm';
import { Factory, Seed } from 'typeorm-seeding';
import { Settings } from '../../api/models/setting';
export class CreateSetting implements Seed {

    public async seed(factory: Factory, connection: Connection): Promise<Settings> {
        const em = connection.createEntityManager();
        const statusData: any = [
            {
                settingId: 1,
                url : 'www.yourURL.com',
                metaTagTitle : 'your title',
                metaTagDescription : 'your Description',
                metaTagKeywords : 'keywords',
                storeName : 'your store name',
                storeOwner : 'owner name',
                storeAddress : 'store address',
                zoneId : 1,
                storeEmail : 'storeemail@example.com',
                storeTelephone : '0123456789',
                storeFax : 'fax number',
                storeLogo : 'yourStoreLogo.jpg',
                maintenanceMode : 1,
                storeLanguageName : 'store language',
                storeCurrencyId : 1,
                storeImage : 'storeImage.png',
                invoicePrefix : 'SPU',
                orderStatus : 1,
                categoryProductCount : 1,
                itemsPerPage : 5,
                google : 'your google account',
                instagram : 'instagram account',
                facebook : 'fb account',
                twitter : 'twitter account',
                status : 1,
            },
        ];
        let i = 0;
        for ( i; i < statusData.length; i++ ) {
            const setting = new Settings();
            setting.url = statusData[i].url;
            setting.metaTagTitle = statusData[i].metaTagTitle;
            setting.metaTagDescription = statusData[i].metaTagDescription;
            setting.metaTagKeyword = statusData[i].metaTagKeywords;
            setting.storeName = statusData[i].storeName;
            setting.storeOwner = statusData[i].storeOwner;
            setting.storeAddress = statusData[i].storeAddress;
            setting.zoneId = statusData[i].zoneId;
            setting.storeEmail = statusData[i].storeEmail;
            setting.storeTelephone = statusData[i].storeTelephone;
            setting.storeFax = statusData[i].storeFax;
            setting.storeLogo = statusData[i].storeLogo;
            setting.maintenanceMode = statusData[i].maintenanceMode;
            setting.storeLanguageName = statusData[i].storeLanguageName;
            setting.storeCurrencyId = statusData[i].storeCurrencyId;
            setting.storeImage = statusData[i].storeImage;
            setting.invoicePrefix = statusData[i].invoicePrefix;
            setting.orderStatus = statusData[i].orderStatus;
            setting.categoryProductCount = statusData[i].categoryProductCount;
            setting.itemsPerPage = statusData[i].itemsPerPage;
            setting.google = statusData[i].google;
            setting.instagram = statusData[i].instagram;
            setting.facebook = statusData[i].facebook;
            setting.twitter = statusData[i].twitter;
            setting.isActive = statusData[i].status;
            await em.save(setting);
        }
        return statusData;
    }
}
