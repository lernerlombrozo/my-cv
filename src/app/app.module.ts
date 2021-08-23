import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardTitleComponent } from './card/card-title/card-title.component';
import { ContactInfoComponent } from './card/contact-info/contact-info.component';
import { CardSubtitleComponent } from './card/card-subtitle/card-subtitle.component';
import { JobComponent } from './card/job/job.component';
import { JobTitleComponent } from './card/job/job-title/job-title.component';
import { JobDatesComponent } from './card/job/job-dates/job-dates.component';
import { JobDescriptionComponent } from './card/job/job-description/job-description.component';
import { LanguageComponent } from './card/language/language.component';
import { LanguageNameComponent } from './card/language/language-name/language-name.component';
import { LanguageDescriptionComponent } from './card/language/language-description/language-description.component';
import { MyAppComponent } from './card/app/my-app.component';
import { GeneralComponent } from './general/general.component';
import { WorkComponent } from './work/work.component';
import { EducationComponent } from './education/education.component';
import { SocialServicesComponent } from './social-services/social-services.component';
import { MoocsComponent } from './moocs/moocs.component';
import { SocialServiceComponent } from './card/social-service/social-service.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardTitleComponent,
    ContactInfoComponent,
    CardSubtitleComponent,
    JobComponent,
    JobTitleComponent,
    JobDatesComponent,
    JobDescriptionComponent,
    LanguageComponent,
    LanguageNameComponent,
    LanguageDescriptionComponent,
    MyAppComponent,
    GeneralComponent,
    WorkComponent,
    EducationComponent,
    SocialServicesComponent,
    MoocsComponent,
    SocialServiceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
