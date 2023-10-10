interface Iinfluencer {
    [key: string]: {
        name: string,
        imageURL: string,
        forWhom: string,
        introductionText: string,
        conclusionText: string,
        recommendItems: Iinfluencer_recommendItem[]
    }
}

interface Iinfluencer_recommendItem {
    productId: string,
    itemExplanation: string,
}

export const allInfluencerInformation: Iinfluencer = {
    // this will be unique id. replace
    youtuber: {
        name: "John",
        imageURL: "https://images.unsplash.com/photo-1629204814140-42a737865119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
        forWhom: "Youtuberになりたい人へ",
        introductionText: `
        こんにちは、みなさん！私はJohnという名前で、今日は人気YouTuberとして登場しました。私のチャンネルでは、テクノロジー、エンターテイメント、ライフスタイルに関するさまざまなコンテンツを提供しています。さて、Youtuberになりたい人向けに、成功するためのおすすめアイテムを4つ紹介しましょう！
        `,
        conclusionText: `
        これらのアイテムは、高品質なコンテンツ制作に不可欠です。しかし、大切なのはコンテンツのクオリティと視聴者とのコミュニケーションですので、常に継続的に学び、成長しましょう。幸運を祈って、素晴らしいYouTubeチャンネルを築いてください！
        `,
        recommendItems: [
            {
                productId: "809f528e42aa62b8ff02ca0b76eed064",
                itemExplanation: `
                高品質なビデオコンテンツを撮影するために、4K対応のカメラを選びましょう。人気のあるモデルには、Sony A7IIIやCanon EOS 90Dなどがあります。
                `,
            },
            {
                productId: "1b4db52582b1a8681e10979fbbcecada",
                itemExplanation: `
                高品質なオーディオはYouTubeチャンネルの成功に欠かせません。USBコンデンサーマイク（例：Blue Yeti）やXLRマイク（例：Audio-Technica AT2020）などを検討しましょう。
                `,
            },
            {
                productId: "f12dbcce982b9068a45687ec17a5071d",
                itemExplanation: `高品質の照明は、映像の品質を向上させます。リングライトやソフトボックスなど、適切な照明装置を投資しましょう。`,
            },
            {
                productId: "897f9265ed6887acdd20ae43caead980",
                itemExplanation: `動画編集やライブストリーミングに必要な処理能力を備えたパソコンまたはノートブックが必要です。高性能なCPUとグラフィックスカードを備えたモデルを選びましょう。`,
            },
        ]
    },
    progamer: {
        name: "Mist1c",
        imageURL: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
        forWhom: "プロゲーマーになりたい人向け",
        introductionText: `
        こんにちは、皆さん！私はここにプロゲーマーMist1cとして登場しました。私のチャンネルでは、最新のゲームプレイ、戦術、そしてゲーム業界の最新情報を共有しています。今日は、プロゲーマーになりたい皆さんに向けて、成功するためのおすすめアイテムを5つ紹介したいと思います。
        `,
        conclusionText: `
        これらのアイテムは、ゲームプレイの品質を向上させ、競技プレイやストリーミングにおいて競争力を発揮するのに役立ちます。しかし、最も重要なのは練習とコミュニケーションです。他のプロゲーマーと連携し、ゲームコミュニティと交流することも成功への鍵です。皆さんも最高のプロゲーマーを目指して、ゲームの世界に挑戦しましょう！
        `,
        recommendItems: [
            {
                productId: "f87e63b17a85819d6db87c9a8fd1c923",
                itemExplanation: `
                ゲーミングの基本は、高性能なゲームPCまたは最新のゲームコンソールです。プレイしたいゲームに合わせて適切なプラットフォームを選びましょう。
                `,
            },
            {
                productId: "551990f71e984e47a996918b9c0e4de3",
                itemExplanation: `
                リアルタイムの反応が求められるゲームでは、高リフレッシュレート（例：144Hz以上）のモニターが重要です。低入力遅延のモデルを選び、プレイ体験を向上させましょう。                `,
            },
            {
                productId: "85bc74d6656a2671c3e0e3e54eb5a3bf",
                itemExplanation: `快適なキー操作は、競技ゲームで成功するために不可欠です。メカニカルキーボードを選びましょう。`,
            },
            {
                productId: "8153d8a27b0055a15e91c77c2ceace73",
                itemExplanation: `正確なカーソル制御は、競技ゲームで成功するために不可欠です。高性能なゲーミングマウスを選びましょう。`,
            },
        ]
    },
    artist: {
        name: "Tom-Art",
        imageURL: "https://images.unsplash.com/photo-1633887088271-9bbc1c52d34f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80",
        forWhom: "絵を描きたい人向け",
        introductionText: `
        こんにちは、皆さん！私はTom-Artとして登場しました。私の世界では、カラフルで創造的なイラストが溢れています。今日は、イラストレーターになりたい皆さんに向けて、成功するためのおすすめアイテムを5つ紹介したいと思います。
        `,
        conclusionText: `
        これらのアイテムは、イラストレーターとしてのスキルを向上させ、自分のアートスタイルを発展させるのに役立ちます。しかし、最も重要なのは情熱と創造力です。定期的に練習し、自分のアートの世界を表現し続けることが、成功への鍵です。皆さんも素晴らしいイラストレーターとしてのキャリアを築くことを楽しみにしています！
        `,
        recommendItems: [
            {
                productId: "a09d4055ef86fcbdbe4ef0e0c0091d91",
                itemExplanation: `
                グラフィックタブレットは、デジタルイラストの制作に必須のツールです。高解像度のペンタブレットや液晶タブレットを選び、直感的な描画体験を楽しむことができます。
                `,
            },
            {
                productId: "c58e252f4356b2d8f5869213ba70c07a",
                itemExplanation: `
                伝統的なイラストも大切です。良質な筆記具と紙を用意し、スケッチやインクの練習を行いましょう。デジタル作品とのバランスを取るのも良いアイデアです。
                `,
            },
            {
                productId: "83e63df7a12eecfc787e64350588ab83",
                itemExplanation: `
                伝統的なイラストも大切です。良質な筆記具と紙を用意し、スケッチやインクの練習を行いましょう。デジタル作品とのバランスを取るのも良いアイデアです。
                `,
            },
            {
                productId: "ef888438d4351352e2416ee236c53a25",
                itemExplanation: `
                伝統的なイラストも大切です。良質な筆記具と紙を用意し、スケッチやインクの練習を行いましょう。デジタル作品とのバランスを取るのも良いアイデアです。
                `,
            },
        ]
    },
    guitarist: {
        name: "Mike",
        imageURL: "https://images.unsplash.com/photo-1565022472425-b6ae14b4b050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2827&q=80",
        forWhom: "ギター初心者向け",
        introductionText: `
        こんにちは、皆さん！私はここにMikeとして登場しました。私たちのバンドはエネルギッシュなライブパフォーマンスとキャッチーな楽曲で知られています。今日は、バンドギタリストになりたい皆さんに向けて、成功するためのおすすめアイテムを5つ紹介します。
        `,
        conclusionText: `
        これらのアイテムは、バンドギタリストとしてのスキルを向上させ、パフォーマンスの質を高めるのに役立ちます。しかし、最も重要なのは情熱と練習です。常に新しい音楽を作成し、他のバンドメンバーとのコラボレーションを楽しむことが、成功への鍵となります。素晴らしい音楽の旅を楽しんでください！
        `,
        recommendItems: [
            {
                productId: "9254bcf14a900706dad1878be46e14a3",
                itemExplanation: `
                エレクトリックギターはロックやポップミュージックの演奏に適しています。自分の音楽スタイルに合ったギターを選び、コンフォートゾーンを見つけましょう。
                `,
            },
            {
                productId: "271a9c4a9e9c792eb901acb8d40a0ba6",
                itemExplanation: `
                ライブパフォーマンスやスタジオ録音には、高品質のギターアンプが必要です。トーンやエフェクトの調整がしやすいアンプを選びましょう。
                `,
            },
            {
                productId: "10f4f5ae3b433c2c8e5270731fbd2b70",
                itemExplanation: `
                良いピックを使うことがギターの上達やテクニックの向上に必要です。硬さの違うピックをいくつか試して自分に合うものを探しましょう。
                `,
            },
            {
                productId: "b24d1fe7a6dcc01e40839fbc33957f36",
                itemExplanation: `ライブ演奏中にギターを快適に演奏するために、しっかりとしたギターストラップが必要です。スタイルに合ったデザインを選びましょう。`,
            },
        ]
    },
}