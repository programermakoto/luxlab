import React from "react";

export default function PrivacyPolicy() {
  return (
    <section
      id="policy"
      className="max-w-5xl mx-auto px-4 py-20"
    >
      {/* タイトル */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          特定商取引法第11条に基づく表記
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          当サービスに関する重要事項を以下に記載しております
        </p>
      </header>

      {/* 本体カード */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 divide-y">
        {[
          ["販売事業者名", "LUXLAB"],
          ["運営責任者", "池田 航"],
          [
            "所在地",
            "大阪府岸和田市荒木町2-8-11\n※請求があった場合、遅滞なく開示いたします。",
          ],
          [
            "電話番号",
            "090-6322-0563\n※請求があった場合、遅滞なく開示いたします。",
          ],
          ["メールアドレス", "pontacorporation0707@gmail.com"],
          ["販売価格", "各商品・サービスページに記載しております。"],
          [
            "商品代金以外の必要料金",
            "インターネット接続料金、通信料金等はお客様のご負担となります。",
          ],
          [
            "支払方法",
            "クレジットカード決済（Stripe／PayPal／Square 等）",
          ],
          [
            "支払時期",
            "クレジットカード決済の場合、各カード会社の規定に基づきます。",
          ],
          [
            "商品（サービス）の提供時期",
            "決済完了後、直ちにご利用いただけます。",
          ],
          [
            "返品・キャンセルについて",
            "サービスの性質上、提供開始後の返金・キャンセルはお受けしておりません。\nただし、当社都合による提供不能・重大な不具合が発生した場合はこの限りではありません。",
          ],
          [
            "表現および商品に関する注意書き",
            "本サービスに示された表現や再現性には個人差があり、必ずしも成果や効果を保証するものではありません。",
          ],
        ].map(([title, content], index) => (
          <div key={index} className="p-6 md:p-8">
            <h2 className="text-sm font-semibold text-gray-700 mb-2">
              {title}
            </h2>
            <p className="text-sm text-gray-900 whitespace-pre-line leading-relaxed">
              {content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
