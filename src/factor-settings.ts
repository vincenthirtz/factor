export default {
    /**
     * Add custom font to app
     */
    headTags: {
        font:
            '<link href="https://fonts.googleapis.com/css?family=Maven+Pro:400,600,700&display=swap" rel="stylesheet" />',
    },
    metatags: {
        defaultTitle: "Vincent Hirtz",
        titleTemplate: "%s - Vincent Hirtz",
    },

    /**
     * Global Theme Settings
     */
    site: {
        components: {
            //   header: (): Promise<any> => import("./header.vue"),
            //   footer: (): Promise<any> => import("./footer.vue"),
        },
        logo: require("./static/member0.jpg"),
        logoInverse: require("./static/member0.jpg"),
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
            content: `Gagnez du temps et commencez un site avec une base solide, puis personnalisez. <i class="fas fa-rocket"></i>`,
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
        component: (): Promise<any> => import("./home.vue"),
        intro: {
            //   component: (): Promise<any> => import("./home/intro.vue"),
            title: "Bienvenue",
            content:
                "Nos solutions sonts adaptées aux besoins des start-ups, des entreprises non technologiques et des entreprises.",
            buttons: [
                {
                    _item: "contact",
                    link: "/contact",
                    text: "Devis",
                    classes: "btn mr-4 text-purple-100 bg-purple-500 hover:bg-purple-600",
                },
                {
                    _item: "pricing",
                    link: "/pricing",
                    text: "Prix",
                    classes:
                        "btn btn-ol border-purple-700 ml-0 mt-4 md:mt-0 hover:text-purple-500 hover:border-purple-500",
                },
            ],
              figure: require("./static/office.png"),
        },
        logos: {
            title: "Outils",
            list: [
                {
                    _item: "ovh",
                    link: "https://www.ovh.com/",
                    target: "_blank",
                      image: require("./static/ovh.png"),
                    alt: "OVH",
                },
                {
                    _item: "wordpress",
                    link: "https://www.wordpress.com/",
                    target: "_blank",
                    image: require("./static/wordpress.png"),
                    alt: "Wordpress",
                },
                {
                    _item: "react",
                    link: "https://www.reactjs.org/",
                    target: "_blank",
                    image: require("./static/react.png"),
                    alt: "React",
                },
                {
                    _item: "prestashop",
                    link: "https://www.prestashop.com",
                    target: "_blank",
                    image: require("./static/prestashop.png"),
                    alt: "Prestashop",
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
                    content: `Chaque demande approuvée est automatiquement ajouté au calendrier et sera bientôt effective`,
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
            pretitle: "Site clé en main",
            title: "On s'occupe de tout!",
            content: `<p>Un prix fixe mensuel qui vous assure une prestation qualitative et transparente.</p>`,
            buttons: [
                {
                    _item: "contact",
                    link: "/contact",
                    text: "Contact",
                    classes:
                        "factor-link factor-link btn bg-purple-500 rounded text-white hover:bg-purple-600",
                },
            ],
            //   figure: (): Promise<any> => import("./el/figure-devops.vue"),
        },
        testimonials: {
            pretitle: "Ils parlent de nous",
            title: "",
            items: [
                {
                    _item: "testimonial_1",
                    content: `Vincent a parfaitement répondu à mes attentes. J'ai pu personnaliser chaque espace de mon site grâce à lui. Rapide et efficace !`,
                    image: require("./static/member1.jpg"),
                    author: "Louis Godefroy",
                    info: `https://www.denisgodefroy.fr`,
                },
                // {
                //     _item: "testimonial_2",
                //     content: `@Zeno designed and fully managed our migration to #productB and on-premises enterprise deployments. They've been absolutely fantastic!`,
                //     //   image: require("./img/member3.jpg"),
                //     author: "Sebastian Hodges",
                //     info: "CEO, SedLaudantium",
                // },
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
            pretitle: "A propos",
            title: "Comment on fonctionne",
            content: `Nos solutions sonts adaptées aux besoins des start-ups, des entreprises non technologiques et des entreprises.`,
        },
        valuesImage1: require("./static/city.png"),
        valuesImage2: require("./static/world.png"),
        valuesTitle: "Nos valeurs",
        values: [
            {
                _item: "simplicity",
                title: "Simple",
                content:
                    "Faire plus avec le minimum. Si vous avez le choix, choisissez la minimisation plutôt que la maximisation.",
            },
            {
                _item: "karma",
                title: "Responsable",
                content:
                    "Soyez aussi responsable que possible. Le terrain nous as prouvé qu'un bon travail est tous récompensé.",
            },
            {
                _item: "humility",
                title: "Humilité",
                content:
                    "Évaluez et réévaluez continuellement les choses que vous croyez et les mesures que vous prenez.",
            },
        ],
        team: {
            /**
             * The team layout has "grid" or "list" options
             */
            layout: "list",
            pretitle: "En savoir plus",
            title: `L'équipe`,
            members: [
                {
                    _item: "member_1",
                      photo: require("./static/member0.jpg"),
                    title: "Gérant",
                    name: "Vincent Hirtz",
                    content:
                        "Si je veux toujours en apprendre davantage sur l'évolution des technologies du web, l’envie de partager mon savoir acquis jusqu’à présent se fait de plus en plus grande. ",
                    links: [
                        {
                            _item: "link_1",
                            path: "https://www.linkedin.com/in/hirtzvincent/",
                            icon: "fab fa-linkedin",
                            target: "_blank",
                        },
                        {
                            _item: "link_2",
                            path: "https://github.com/vincenthirtz",
                            icon: "fab fa-github",
                            target: "_blank",
                        },
                        {
                            _item: "link_3",
                            path: "https://twitter.com/alukaard76",
                            icon: "fab fa-twitter",
                            target: "_blank",
                        },
                    ],
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
            pretitle: "Contact",
            title: "Comment nous pouvons vous aider ?",
            content:
                "Nous aimerions connaître votre entreprise et trouver un moment pour discuter de vos besoins. Remplissez le formulaire et nous vous contacterons sous peu",
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
            text: "Envoyer",
        },
        inputFormat: "vertical",
        confirm: {
            title: "C'est fait!",
            subTitle: "Nous vous répondrons dans les plus brefs délais.",
        },
        layout: [
            {
                label: "Nom",
                _id: "name",
                inputType: "text",
                placeholder: "Prénom et Nom",
                required: true,
            },
            {
                label: "Email",
                _id: "email",
                inputType: "email",
                placeholder: "name@example.com",
                required: true,
            },
            {
                label: "Message",
                _id: "message",
                inputType: "textarea",
                placeholder: "Message",
                required: true,
            },
        ],
    },
    // Blog plugin and custom blog Settings
    blog: {
        pretitle: "Internet ne nous attend pas",
        title: "Blog",
        content:
            "Découvrez les dernières trouvailles, annonces, et articles de l'équipe",
        indexRoute: "/blog",
        postRoute: "/entry",
        limit: 6,
        returnLinkText: "Retour",
        notFound: {
            title: "Pas d'articles",
            subTitle: "Impossible de trouver des articles de blog. Oups!",
        },
        components: {
          blogIndex: (): Promise<any> => import("./blog.vue"),
        //   blogSingle: (): Promise<any> => import("./blog/blog-single.vue"),
        //   featuredImage: (): Promise<any> => import("./blog/el-featured-image.vue"),
        //   title: (): Promise<any> => import("./blog/widget-title.vue"),
        //   date: (): Promise<any> => import("./blog/widget-date.vue"),
        //   author: (): Promise<any> => import("./blog/widget-author.vue"),
        //   singleHeader: (): Promise<any> => import("./blog/el-single-header.vue"),
        //   entry: (): Promise<any> => import("./blog/widget-entry.vue"),
        //   social: (): Promise<any> => import("./blog/widget-social.vue"),
        //   pagination: (): Promise<any> => import("./blog/widget-pagination.vue"),
        },
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