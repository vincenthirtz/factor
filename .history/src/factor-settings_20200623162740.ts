export default {
    /**
     * Add custom font to app
     */
    headTags: {
        font:
            '<link href="https://fonts.googleapis.com/css?family=Maven+Pro:400,600,700&display=swap" rel="stylesheet" />',
    },
    /**
     * Tailwind CSS Config
     */
    tailwind: {
        // config: require("./tailwind.config.js"),
        // directives: require("./tailwind.css"),
    },
    metatags: {
        defaultTitle: "Zeno",
        titleTemplate: "%s - Factor JS",
    },

    /**
     * Global Theme Settings
     */
    site: {
        components: {
            //   header: (): Promise<any> => import("./header.vue"),
            //   footer: (): Promise<any> => import("./footer.vue"),
        },
        // logo: require("./img/logo-zeno.svg"),
        // logoInverse: require("./img/logo-zeno-inverse.svg"),
        nav: [
            {
                _item: "home",
                path: "/",
                name: "Accueil",
            },
            {
                _item: "solutions",
                path: "/#solutions",
                name: "Solutions",
            },
            {
                _item: "pricing",
                path: "/pricing",
                name: "Prix",
            },
            {
                _item: "about",
                path: "/about",
                name: "A propos",
            },
            {
                _item: "blog",
                path: "/blog",
                name: "Blog",
            },
            {
                _item: "contact",
                path: "/contact",
                name: "Contact",
            },
            // {
            //     _item: "dashboard",
            //     path: "/dashboard",
            //     name: "Dashboard &rarr;",
            // },
        ],
        /**
         * Copy for the call to action on the home page, pricing page, and about page.
         */
        cta: {
            title: "Travaillons ensemble",
            content: `Gagnez du temps et commencez un site avec une base solide, puis personnalisez.. <i class="fas fa-rocket"></i>`,
            buttons: [
                {
                    _item: "contact",
                    link: "/contact",
                    text: "Devis gratuit",
                    classes: "btn bg-gray-100 rounded text-purple-500 hover:bg-gray-300",
                },
            ],
            //   figure: require("./img/cloud-with-shadow.svg"),
            footerFigureAlt: "Cloud",
        },
    },
    /**
     * Copy for the home page template.
     */
    home: {
        // component: (): Promise<any> => import("./home/v-home.vue"),
        intro: {
            //   component: (): Promise<any> => import("./home/intro.vue"),
            title: "Yo to Zeno, <br>SaaS Factor Theme",
            content:
                "Zeno is a minimalist theme suited for the needs of start-ups, tech businesses and SaaS companies. Styles are powered by Tailwind, a low-level CSS framework.",
            buttons: [
                {
                    _item: "contact",
                    link: "/contact",
                    text: "Contact Us",
                    classes: "btn mr-4 text-purple-100 bg-purple-500 hover:bg-purple-600",
                },
                {
                    _item: "pricing",
                    link: "/pricing",
                    text: "Pricing",
                    classes:
                        "btn btn-ol border-purple-700 ml-0 mt-4 md:mt-0 hover:text-purple-500 hover:border-purple-500",
                },
            ],
            //   figure: require("./img/intro.svg"),
        },
        logos: {
            title: "Working with the following clouds:",
            list: [
                {
                    _item: "aws",
                    link: "https://aws.amazon.com/",
                    target: "_blank",
                    //   image: require("./img/aws.svg"),
                    alt: "Amazon Web Services",
                },
                {
                    _item: "google",
                    link: "https://cloud.google.com/",
                    target: "_blank",
                    //   image: require("./img/google-cloud-platform.svg"),
                    alt: "Google Cloud Platform",
                },
                {
                    _item: "digitalocean",
                    link: "https://www.digitalocean.com/",
                    target: "_blank",
                    //   image: require("./img/digital-ocean.svg"),
                    alt: "Digital Ocean",
                },
            ],
        },
        section3: {
            id: "solutions",
            items: [
                {
                    _item: "plan",
                    //   icon: require("./img/plan.svg"),
                    title: "Faisabilité",
                    content: `Analysons les besoins du projet pour atteindre la solution la plus adaptée`,
                },
                {
                    _item: "build",
                    //   icon: require("./img/build.svg"),
                    title: "Construction",
                    content: `Un premier jet rapide et efficace pour vous donner un aperçu de votre future site web`,
                },
                {
                    _item: "manage",
                    //   icon: require("./img/manage.svg"),
                    title: "Délai",
                    content: `Nous ferons tout pour assurer une livraison à temps et des déploiements réguliers`,
                },
                {
                    _item: "gears",
                    //   icon: require("./img/gears.svg"),
                    title: "Automatique",
                    content: `Chaque demande approuvée est automatiquement ajouté au calendrier et sera bientôt effective.`,
                },
                {
                    _item: "clouds",
                    //   icon: require("./img/clouds.svg"),
                    title: "Cloud",
                    content: `Votre site et vos fichiers sont sauvegardés dans un cloud sécurisé`,
                },
                {
                    _item: "security",
                    //   icon: require("./img/security.svg"),
                    title: "Sécurité",
                    content: `Nous utilisons des services sécurisés et des protections pour assurer un site stable et durable`,
                },
            ],
        },
        section4: {
            id: "software-as-a-service",
            pretitle: "Software-as-a-Service",
            title: "The last software you'll need!",
            content: `<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>`,
            buttons: [
                {
                    _item: "contact",
                    link: "/contact",
                    text: "Contact Us",
                    classes:
                        "factor-link factor-link btn bg-purple-500 rounded text-white hover:bg-purple-600",
                },
            ],
            //   figure: (): Promise<any> => import("./el/figure-devops.vue"),
        },
        section5: {
            id: "software-as-code",
            pretitle: "Open Source",
            title: "Product A + Product B = ",
            //   titleIcon: require("./img/custom-heart.svg"),
            items: [
                {
                    _item: "producta",
                    //   image: require("./img/logo-producta.svg"),
                    alt: "Product A",
                    content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`,
                },
                {
                    _item: "productb",
                    //   image: require("./img/logo-productb.svg"),
                    alt: "Product B",
                    content: `Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.`,
                },
            ],
            syntaxTitle: "mycode.ts",
            //   syntax: (): Promise<any> => import("./el/figure-infrastructure.vue"),
        },
        testimonials: {
            pretitle: "Success Stories",
            title: "Our customers love what we do!",
            items: [
                {
                    _item: "testimonial_1",
                    content: `@Zeno designed and fully managed our migration to #productA and on-premises enterprise deployments. They've been absolutely fantastic!`,
                    //   image: require("./img/member4.jpg"),
                    author: "Louis Godefroy",
                    info: '<a href="https://www.denisgodefroy.fr">Site vitrine</a>',
                },
                {
                    _item: "testimonial_2",
                    content: `@Zeno designed and fully managed our migration to #productB and on-premises enterprise deployments. They've been absolutely fantastic!`,
                    //   image: require("./img/member3.jpg"),
                    author: "Sebastian Hodges",
                    info: "CEO, SedLaudantium",
                },
            ],
        },
        meta: {
            title: "Factor Zeno Theme",
            description:
                "Zeno is a minimalist theme suited for the needs of IT companies and tech startups. Styles are powered by Tailwind, a low-level CSS framework.",
            //   image: require("./img/logo-zeno.jpg"),
        },
    },
    /**
     * Settings for the about page template
     */
    about: {
        hero: {
            pretitle: "About Theme Zeno",
            title: "Built with Factor CMS",
            content: `Zeno is a minimalist theme suited for the needs of IT companies and tech startups. Zeno styles are powered by Tailwind, a low-level CSS framework.`,
        },
        // valuesImage1: require("./img/about1.jpg"),
        // valuesImage2: require("./img/about2.jpg"),
        valuesTitle: "A company with core values:",
        values: [
            {
                _item: "simplicity",
                title: "Simplicity",
                content:
                    "Do more with less. Given the choice, choose minimization over maximization.",
            },
            {
                _item: "karma",
                title: "Karma",
                content:
                    "Be as altruistic as possible. History has proven that karma works in mysterious ways.",
            },
            {
                _item: "humility",
                title: "Humility",
                content:
                    "Continually assess and reassess the things you believe & actions you're taking. Never assume.",
            },
        ],
        team: {
            /**
             * The team layout has "grid" or "list" options
             */
            layout: "list",
            pretitle: "Meet the Minds",
            title: `The Team`,
            members: [
                {
                    _item: "member_1",
                    //   photo: require("./img/member1.jpg"),
                    title: "Co-Founder",
                    name: "Zeno Elea 1",
                    content:
                        "custom element Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
                    links: [
                        {
                            _item: "link_1",
                            path: "https://www.linkedin.com/",
                            icon: "fab fa-linkedin",
                            target: "_blank",
                        },
                        {
                            _item: "link_2",
                            path: "https://github.com/",
                            icon: "fab fa-github",
                            target: "_blank",
                        },
                        {
                            _item: "link_3",
                            path: "https://angel.co/",
                            icon: "fab fa-angellist",
                            target: "_blank",
                        },
                    ],
                },
                {
                    _item: "member_2",
                    //   photo: require("./img/member2.jpg"),
                    title: "Co-Founder",
                    name: "Zeno Elea",
                    content:
                        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
                },
                {
                    _item: "member_3",
                    //   photo: require("./img/member3.jpg"),
                    title: "Managing Partner",
                    name: "Zeno Elea",
                    content:
                        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
                },
                {
                    _item: "member_4",
                    //   photo: require("./img/member4.jpg"),
                    title: "Managing Partner",
                    name: "Zeno Elea",
                    content:
                        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
                },
                {
                    _item: "member_5",
                    //   photo: require("./img/member5.jpg"),
                    title: "Managing Partner",
                    name: "Zeno Elea",
                    content:
                        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
                },
                {
                    _item: "member_6",
                    //   photo: require("./img/member6.jpg"),
                    title: "Managing Partner",
                    name: "Zeno Elea",
                    content:
                        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
                },
            ],
        },
        meta: {
            title: "About - Factor Zeno Theme",
            description:
                "Zeno is a minimalist theme suited for the needs of IT companies and tech startups. Zeno styles are powered by Tailwind, a low-level CSS framework.",
            //   image: require("./img/logo-zeno.jpg"),
        },
    },
    // Pricing Page
    pricing: {
        hero: {
            pretitle: "Des tarifs adaptés à votre entreprise.",
            title: `Prix`,
            content:
                "Choisissez la solution qui convient à vos besoins.",
        },
        packages: [
            {
                classes: "md:mt-6",
                name: "Starter",
                description: "Site vitrine sans intelligence.",
                price: `10€ <span class="text-base">par mois</span>`,
                list: [
                    {
                        content: "Solution adaptée à votre demande",
                    },
                    {
                        content: "Style basique",
                    },
                    {
                        content: `Personnalisable`,
                    },
                    {
                        content: "Rapidité",
                    },
                    {
                        content: "Mise en production garantie",
                    },
                ],
                buttonLink: "/contact",
                buttonText: "Devis",
                buttonClasses:
                    "btn btn-ol border-purple-700 hover:text-purple-500  hover:border-purple-500",
            },
            {
                name: "Pro",
                description: "Tous les avantages du starter et un accompagnement de A à Z.",
                price: `€20 <span class="text-base">par mois</span>`,
                list: [
                    {
                        content: "Boutique et option de paiement",
                    },
                    {
                        content: "Charte graphique",
                    },
                    {
                        content: "SEO & Analyse de trafic",
                    },
                    {
                        content: "Sauvegardes quotidiennes",
                    },
                    {
                        content: "Gestion complète (hébergement, nom de domaine, rappels)",
                    },
                ],
                buttonLink: "/contact",
                buttonText: "Devis",
                buttonClasses: "btn text-purple-100 bg-purple-500 hover:bg-purple-600",
            },
            {
                classes: "md:mt-6",
                name: "Business",
                description: "Tous les avantages du Pro avec une solution sur mesure adapté aux grandes entreprises",
                price: `<span class="text-base">Selon les projets</span>`,
                list: [
                    {
                        content: "Assistance H24 6J/7",
                    },
                    {
                        content: `Dépannage`,
                    },
                    {
                        content: `Sous traitance`,
                    },
                ],
                buttonLink: "/contact",
                buttonText: "Devis",
                buttonClasses:
                    "btn btn-ol border-purple-700 hover:text-purple-500  hover:border-purple-500",
            },
        ],
        packagesFooter:
            "* Garantie de remboursement au bout de 15 jours",
        faq: {
            title: "FAQs",
            questions: [
                {
                    _item: "q1",
                    title: "Puis-je acheter un niveau inférieur et mettre à niveau plus tard?",
                    content: `Oui, sans problèmes. Et inversement.`,
                },
                {
                    _item: "q2",
                    title: "Et si je n'aime pas la solution proposée?",
                    content: `On peut en discuter et essayer une nouvelle version. Si toutefois aucunes solutions ne vous convient on peut procéder à une fin de contrat à la fin du mois courant.
                    `,
                },
                {
                    _item: "q3",
                    title: "Puis-je annuler à tout moment?",
                    content: `Dans la limite de 15 jours oui, si ce délai dépassé il faudra alors attendre le prochain mois pour régler le problème ou mettre fin au contrat.`,
                },
                {
                    _item: "q6",
                    title: "Y a-t-il des remises disponibles?",
                    content: `Si le projet amène à un peu de modifications pendant un certain temps, nous pouvons rediscuter du montant`,
                },
            ],
        },
        meta: {
            title: "Pricing - Factor Zeno Theme",
            description:
                "A minimal, personal or portfolio theme. Ideal for entrepreneurs or individuals of multiple creative professions.",
            //   image: require("./img/logo-zeno.jpg"),
        },
    },
    // Contact Page
    contact: {
        hero: {
            pretitle: "Contact Us",
            title: "Give us a shout. Let us know how we can help.",
            content:
                "We'd love to hear about your business and find a time to discuss your needs. Fill out the form and we will be in touch shortly.",
        },
        meta: {
            title: "Contact - Factor Zeno Theme",
            description:
                "A minimal, personal or portfolio theme. Ideal for entrepreneurs or individuals of multiple creative professions.",
            //   image: require("./img/logo-zeno.jpg"),
        },
    },
    // Contact form plugin settings
    contactForm: {
        submit: {
            btn: "m-0",
            size: "m-0",
            text: "Contact",
        },
        inputFormat: "vertical",
        confirm: {
            title: "Got it!",
            subTitle: "We’ll get back to you as soon as possible.",
        },
        layout: [
            {
                label: "Name",
                _id: "name",
                inputType: "text",
                placeholder: "Full Name",
                required: true,
            },
            {
                label: "Work Email",
                _id: "email",
                inputType: "email",
                placeholder: "name@example.com",
                required: true,
            },
            {
                label: "Message",
                _id: "message",
                inputType: "textarea",
                placeholder: "how can we help?",
                required: true,
            },
        ],
    },
    // Blog plugin and custom blog Settings
    blog: {
        pretitle: "Because the future comes fast",
        title: "Zeno Blog",
        content:
            "Discover the latest product updates, announcements, and articles from the Zeno team",
        indexRoute: "/blog",
        postRoute: "/entry",
        limit: 6,
        returnLinkText: "Back",
        notFound: {
            title: "No Posts",
            subTitle: "Couldn't find any blog posts.",
        },
        promo: {
            pretitle: "Built with Factor CMS",
            title: "About Theme Zeno",
            content:
                "Zeno is a minimalist theme suited for the needs of IT companies and tech startups. Zeno styles are powered by Tailwind, a low-level CSS framework.",
            button: {
                link: "/about",
                text: "Learn More",
                classes: "btn bg-gray-100 rounded text-purple-500 hover:text-purple-600",
            },
        },
        // components: {
        //   blogIndex: (): Promise<any> => import("./blog/blog-index.vue"),
        //   blogSingle: (): Promise<any> => import("./blog/blog-single.vue"),
        //   featuredImage: (): Promise<any> => import("./blog/el-featured-image.vue"),
        //   title: (): Promise<any> => import("./blog/widget-title.vue"),
        //   date: (): Promise<any> => import("./blog/widget-date.vue"),
        //   author: (): Promise<any> => import("./blog/widget-author.vue"),
        //   singleHeader: (): Promise<any> => import("./blog/el-single-header.vue"),
        //   entry: (): Promise<any> => import("./blog/widget-entry.vue"),
        //   social: (): Promise<any> => import("./blog/widget-social.vue"),
        //   pagination: (): Promise<any> => import("./blog/widget-pagination.vue"),
        // },
        layout: {
            index: ["featuredImage", "date", "title", "author"],
            single: ["singleHeader", "entry", "social"],
        },
        metatags: {
            index: {
                title: "Blog - The Latest from Zeno Theme",
                description:
                    "Discover the latest product updates, announcements, and articles from the Zeno team",
                // image: require("./img/logo-zeno.jpg"),
            },
        },
    },
    // Footer
    footer: {
        nav: [
            {
                _item: "home",
                path: "/",
                name: "Accueil",
            },
            {
                _item: "pricing",
                path: "/pricing",
                name: "Prix",
            },
            {
                _item: "about",
                path: "/about",
                name: "A propos",
            },
            {
                _item: "about",
                path: "/blog",
                name: "Blog",
            },
            {
                _item: "contact",
                path: "/contact",
                name: "Contact",
            },
            {
                _item: "twitter",
                path: "https://twitter.com/alukaard76",
                icon: "fab fa-twitter",
                target: "_blank",
            },
        ],
        left: `Fait avec <i class="fas fa-heart"></i> et <a href='https://factor.dev/' target='_blank'>Factor</a>`,
        right: `&copy 2020 Vincent Hirtz`, // Empty when blank (e.g. right: '') or Dynamically added if removed/commented.
        // figure: require("./img/cloud-with-shadow.svg"),
        figureAlt: "Cloud",
    },
}