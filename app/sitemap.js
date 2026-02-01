export default function sitemap() {
    const baseUrl = 'https://identitydental.in';

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
    ];
}
