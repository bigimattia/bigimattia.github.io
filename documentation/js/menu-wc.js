'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">bigimattia.github.io documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-12f02a99b746e3336cf2594ed88e49c7733d566102e1a3e4341d1d27ac2dc9b4232d043e65bd14197f832186f6f6923cced46fed397bc540722ac09c28407be8"' : 'data-bs-target="#xs-components-links-module-AppModule-12f02a99b746e3336cf2594ed88e49c7733d566102e1a3e4341d1d27ac2dc9b4232d043e65bd14197f832186f6f6923cced46fed397bc540722ac09c28407be8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-12f02a99b746e3336cf2594ed88e49c7733d566102e1a3e4341d1d27ac2dc9b4232d043e65bd14197f832186f6f6923cced46fed397bc540722ac09c28407be8"' :
                                            'id="xs-components-links-module-AppModule-12f02a99b746e3336cf2594ed88e49c7733d566102e1a3e4341d1d27ac2dc9b4232d043e65bd14197f832186f6f6923cced46fed397bc540722ac09c28407be8"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExploreContainerComponentModule.html" data-type="entity-link" >ExploreContainerComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' : 'data-bs-target="#xs-components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' :
                                            'id="xs-components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' }>
                                            <li class="link">
                                                <a href="components/ExploreContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExploreContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageModule.html" data-type="entity-link" >Tab1PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-Tab1PageModule-9021517ddba37032dd18c1d90fee452e14e2fd1fa587c78d68c7b32dca5af7cca335b70ef9d93429592a7982d2bdf647f1d092754c94fc73ed152e1d48e334b4"' : 'data-bs-target="#xs-components-links-module-Tab1PageModule-9021517ddba37032dd18c1d90fee452e14e2fd1fa587c78d68c7b32dca5af7cca335b70ef9d93429592a7982d2bdf647f1d092754c94fc73ed152e1d48e334b4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab1PageModule-9021517ddba37032dd18c1d90fee452e14e2fd1fa587c78d68c7b32dca5af7cca335b70ef9d93429592a7982d2bdf647f1d092754c94fc73ed152e1d48e334b4"' :
                                            'id="xs-components-links-module-Tab1PageModule-9021517ddba37032dd18c1d90fee452e14e2fd1fa587c78d68c7b32dca5af7cca335b70ef9d93429592a7982d2bdf647f1d092754c94fc73ed152e1d48e334b4"' }>
                                            <li class="link">
                                                <a href="components/Tab1Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageRoutingModule.html" data-type="entity-link" >Tab1PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageModule.html" data-type="entity-link" >Tab2PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-Tab2PageModule-75aad29e430c4244d10989b8a0dcffca302311665971c98f2ee1ed1ebdfb2a3bb1527333d263f580873e7da3cd9fff19bab8e6b6ca7825278e0c674b15e5da90"' : 'data-bs-target="#xs-components-links-module-Tab2PageModule-75aad29e430c4244d10989b8a0dcffca302311665971c98f2ee1ed1ebdfb2a3bb1527333d263f580873e7da3cd9fff19bab8e6b6ca7825278e0c674b15e5da90"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab2PageModule-75aad29e430c4244d10989b8a0dcffca302311665971c98f2ee1ed1ebdfb2a3bb1527333d263f580873e7da3cd9fff19bab8e6b6ca7825278e0c674b15e5da90"' :
                                            'id="xs-components-links-module-Tab2PageModule-75aad29e430c4244d10989b8a0dcffca302311665971c98f2ee1ed1ebdfb2a3bb1527333d263f580873e7da3cd9fff19bab8e6b6ca7825278e0c674b15e5da90"' }>
                                            <li class="link">
                                                <a href="components/Tab2Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab2Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageRoutingModule.html" data-type="entity-link" >Tab2PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageModule.html" data-type="entity-link" >Tab3PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-Tab3PageModule-8a513e21870ca5c4137a1f59a3fa769a3a66c60fc02f2c80e0ea68c23842c16942778c434e8a226f207525ff4227df8f83c9a1ecbeefc26840cea02dd1078273"' : 'data-bs-target="#xs-components-links-module-Tab3PageModule-8a513e21870ca5c4137a1f59a3fa769a3a66c60fc02f2c80e0ea68c23842c16942778c434e8a226f207525ff4227df8f83c9a1ecbeefc26840cea02dd1078273"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab3PageModule-8a513e21870ca5c4137a1f59a3fa769a3a66c60fc02f2c80e0ea68c23842c16942778c434e8a226f207525ff4227df8f83c9a1ecbeefc26840cea02dd1078273"' :
                                            'id="xs-components-links-module-Tab3PageModule-8a513e21870ca5c4137a1f59a3fa769a3a66c60fc02f2c80e0ea68c23842c16942778c434e8a226f207525ff4227df8f83c9a1ecbeefc26840cea02dd1078273"' }>
                                            <li class="link">
                                                <a href="components/Tab3Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab3Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageRoutingModule.html" data-type="entity-link" >Tab3PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link" >TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TabsPageModule-dc93590fcd51989cf2be001df22f204fb41bc791691c0515c89872850cdf21bdbc804a684cd85920a619fe6af992e60c324587eb378529eb406f77d16a295454"' : 'data-bs-target="#xs-components-links-module-TabsPageModule-dc93590fcd51989cf2be001df22f204fb41bc791691c0515c89872850cdf21bdbc804a684cd85920a619fe6af992e60c324587eb378529eb406f77d16a295454"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-dc93590fcd51989cf2be001df22f204fb41bc791691c0515c89872850cdf21bdbc804a684cd85920a619fe6af992e60c324587eb378529eb406f77d16a295454"' :
                                            'id="xs-components-links-module-TabsPageModule-dc93590fcd51989cf2be001df22f204fb41bc791691c0515c89872850cdf21bdbc804a684cd85920a619fe6af992e60c324587eb378529eb406f77d16a295454"' }>
                                            <li class="link">
                                                <a href="components/TabsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageRoutingModule.html" data-type="entity-link" >TabsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TicTacToeComponentModule.html" data-type="entity-link" >TicTacToeComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TicTacToeComponentModule-9a2e3c6cfb803157725c5edd5cc316e0f84f0a9cc5a65a94a21e7637fb52ce55edcd79b544f6daaae2ce65c0f744b1a258a543c27e176305817e69d32260f94f"' : 'data-bs-target="#xs-components-links-module-TicTacToeComponentModule-9a2e3c6cfb803157725c5edd5cc316e0f84f0a9cc5a65a94a21e7637fb52ce55edcd79b544f6daaae2ce65c0f744b1a258a543c27e176305817e69d32260f94f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TicTacToeComponentModule-9a2e3c6cfb803157725c5edd5cc316e0f84f0a9cc5a65a94a21e7637fb52ce55edcd79b544f6daaae2ce65c0f744b1a258a543c27e176305817e69d32260f94f"' :
                                            'id="xs-components-links-module-TicTacToeComponentModule-9a2e3c6cfb803157725c5edd5cc316e0f84f0a9cc5a65a94a21e7637fb52ce55edcd79b544f6daaae2ce65c0f744b1a258a543c27e176305817e69d32260f94f"' }>
                                            <li class="link">
                                                <a href="components/TicTacToeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TicTacToeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});