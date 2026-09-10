// このファイルは `pnpm run types:generate` が生成します。手で編集しないでください。
// 生成元: sp-kintai-api の prisma/schema.prisma（単一の真実源）
//
// 配布方針（chatgpt-gas#453 / sp-kintai-api#210）:
//  - Prisma のランタイム型に依存しない self-contained な型定義です。consumer 側に
//    `@prisma/client` を入れる必要はありません。
//  - **スカラーのみ**を含みます。リレーション（User.kintais 等）は API レスポンスに
//    含まれないため、型にも出していません。
//  - **DateTime は `string`** です。JSON 越しに届くのは ISO 8601 文字列です。
//  - enum は型ユニオンです。本パッケージは JS を含まないため、実行時に値として
//    参照できる const は提供しません（`as HolidayType` のような型注釈で使ってください）。

/**
 * 休暇区分
 * Phase 3a (2026-06): 就業規則 第 18-23 / 43 条に明記された日単位休暇を追加。
 * 時間単位の Ikujijikan / Bosei / Seiri は Phase 3b 以降でデータモデル拡張とセットで検討。
 * 既存 enum (Ikukyu / Kyushoku) の意味は変更しない (Ikukyu=育児休業、Kyushoku=私傷病休職)。
 */
export type HolidayType =
  /** 有給（１日） */
  | 'YukyuDay'
  /** 有給（半日） */
  | 'YukyuHalf'
  /** 振休 */
  | 'Furikyu'
  /** 代休 */
  | 'Daikyu'
  /** 欠勤 */
  | 'Kekkin'
  /** 休職 (私傷病休職、第 24 条) */
  | 'Kyushoku'
  /** 慶弔休暇 (第 22 条) */
  | 'Keicho'
  /** 育児休業 (第 21 条 / 育介法) */
  | 'Ikukyu'
  /** 公休日（週5日勤務以外の人が設定する休み） */
  | 'Kokyu'
  /**
   * Phase 3a 追加
   * 産前休業 (第 18 条 1 項)
   */
  | 'Sanzen'
  /** 産後休業 (第 18 条 2 項) */
  | 'Sango'
  /** 子の看護等休暇 (第 21 条 / 育介法) */
  | 'KoNoKango'
  /** 介護休暇 (第 21 条 / 育介法) */
  | 'Kaigo'
  /** 介護休業 (第 21 条 / 育介法) */
  | 'KaigoLong'
  /** 裁判員等休暇 (第 23 条) */
  | 'Saibanin'
  /** 業務上災害療養 (第 43 条 / 労災) */
  | 'Ryouyou';

/** 社員マスタ */
export interface User {
  email: string;
  name: string;
  /** Postgresqlの連番は1から開始になる */
  userNo: number;
  /** 入社日：yyyy-mm-dd 形式とする。 */
  enter_date: string;
  /** 退職日：yyyy-mm-dd 形式とする。退職していない場合は null */
  quit_date: string | null;
  /** 週に働く日数 */
  work_day_per_week: number;
  /** ユーザの入力用スプレッドシートのファイルID: 元のシステムにあったもの。 */
  file_id: string | null;
  /** 管理者（上長がいない場合のデフォルトの上長） */
  is_admin: boolean;
  /**
   * 勤怠記録の対象者かどうか。false の場合は勤怠データを生成せず、月次サマリー等の集計対象からも除外する。
   * 代表取締役・取締役等の労基法 41 条 2 号該当者を想定（就業規則第 16 条の 2 / Issue: gap-analysis §4）。
   * システム管理機能 (`is_admin`) とは独立した概念で、両者を併用することで「勤怠は記録しないが管理機能は利用できる」運用が可能。
   */
  is_kintai_target: boolean;
  /**
   * 管理監督者かどうか（労基法 41 条 2 号 / 就業規則第 16 条の 2。取締役・執行役員・部長職等）。
   * true の場合、時間外・休日割増の適用除外対象。is_admin（システム権限）・is_kintai_target（集計対象）とは
   * いずれも別概念（例: 部長職は is_kintai_target=true で勤怠は記録するが管理監督者=true で割増除外）。
   * ※ 本フラグは「事実の保持」のみ。深夜割増（労基法 37 条）の扱い（41 条は深夜業を除外しない）を含む
   * 割増計算ロジックは下流（gap-analysis 項目 10 / #80）で社労士確認のうえ実装する。現状は消費側なし。
   */
  is_manager_supervisor: boolean;
  /** 削除フラグ */
  is_removed: boolean;
  /** 作成日 */
  created_at: string;
  /** 更新日 */
  updated_at: string;
  /** 作成者 */
  created_by: string | null;
  /** 更新者 */
  updated_by: string | null;
}

/** 「1人のUserが複数の上司を持つ」という多対多（Many-to-Many）の関係 */
export interface UserManager {
  userEmail: string;
  managerEmail: string;
  /** 作成日 */
  created_at: string;
  /** 更新日 */
  updated_at: string;
  /** 作成者 */
  created_by: string | null;
  /** 更新者 */
  updated_by: string | null;
}

/** 祝日マスタ */
export interface Holidays {
  /** 祝日：yyyy-mm-dd 形式とする。 */
  date: string;
  /** 曜日(日月火水木金土のいずれか) */
  day_of_week: string;
  /** 祝日名 */
  name: string | null;
  /** メモ */
  memo: string | null;
  /** 作成日 */
  created_at: string;
  /** 更新日 */
  updated_at: string;
  /** 作成者 */
  created_by: string | null;
  /** 更新者 */
  updated_by: string | null;
}

/**
 * 会計期マスタ (fiscal-year-change-2026 Phase 3-2)
 * 旧 regime (期 1〜11) は yyyy-11-16 〜 yyyy+1-11-15 / grantDate=yyyy-12-01。
 * 変則 期 12 は 2025-11-16 〜 2026-03-15 / grantDate=2025-12-01 (4 ヶ月)。
 * 新 regime (期 13〜) は yyyy-03-16 〜 yyyy+1-03-15 / grantDate=yyyy-04-01。
 * 期境界・付与日は date.ts のハードコードから本テーブル参照に置換した。
 * `findFiscalPeriodByDate(date)` で日付から ki を引く運用のため、startDate / endDate は
 * 全期で重複なし・隙間なしに seed する必要がある。
 */
export interface FiscalPeriod {
  /** 期番号 (1 始まり) */
  ki: number;
  /** 期の開始日 yyyy-mm-dd 形式 (kintai cycle 境界 = 16 日始まり) */
  startDate: string;
  /** 期の終了日 yyyy-mm-dd 形式 (kintai cycle 境界 = 15 日終わり) */
  endDate: string;
  /** 有給付与日 yyyy-mm-dd 形式 (就業規則ベース) */
  grantDate: string;
  /** month01 が指す暦月 (1-12)。AnnualYukyu.month01〜month12 のオフセット計算で使用 */
  fiscalStartMonth: number;
  /** 期の長さ (月数)。通常 12、変則 12 期のみ 4 */
  monthCount: number;
  /** 変則期フラグ。UI で「変則」表示するため */
  isShortPeriod: boolean;
  /** 作成日 */
  created_at: string;
  /** 更新日 */
  updated_at: string;
}

/** 勤怠データ */
export interface Kintai {
  email: string;
  date: string;
  /** 休暇区分 */
  type: HolidayType | null;
  /** 祝日かどうか */
  is_holiday: boolean;
  /**
   * 有給に使った時間数：hh:mm 形式とする。
   * 有給１日の場合は08:00, 有給半日の場合は04:00とする。
   */
  paid_hours: string;
  /** 勤務開始時間：hh:mm 形式とする。 */
  start: string;
  /** 勤務終了時間：hh:mm 形式とする。 */
  end: string;
  /** 休憩時間：hh:mm 形式とする。 */
  break: string;
  /** 労働時間：hh:mm 形式とする。 */
  work_hours: string;
  /** うち深夜労働時間：hh:mm 形式とする。 */
  late_night_work_hours: string;
  /**
   * 管理用: defaultはデータ移行用
   * 会社の期数
   */
  ki: number;
  /** このデータが所属する年月のyyyy-mm形式 */
  yyyymm: string;
  /** メモ欄。特に振休の場合は対象となる日付を入れる。 */
  memo: string | null;
  /** 作成日 */
  created_at: string;
  /** 更新日 */
  updated_at: string;
  /** 作成者 */
  created_by: string | null;
  /** 更新者 */
  updated_by: string | null;
}

/** 年間有給管理テーブル */
export interface AnnualYukyu {
  /** 社員のemail */
  email: string;
  /** 期数 */
  ki: number;
  /** 基準日 yyyy-mm-dd形式 */
  standardDate: string;
  /** この期の開始日 yyyy-mm-dd形式 */
  start: string;
  /** この期の終了日 yyyy-mm-dd形式 */
  end: string;
  /** 有給付与（調整前） */
  grantedOrigin: number;
  /** 有給付与（調整後） */
  granted: number;
  /** 有給取得合計（Kintai 由来の raw 値。台帳の調整キャップ計算で参照） */
  totalUsed: number;
  /**
   * 台帳開始時点（最小 ki>=11 行）の開繰越シード = ki<=10 から期11 へ繰り越された確定残（日）。
   * KINTAI_SYSTEM_STARTED 前の消化は Kintai に存在せず再計算不能なため、Excel 移行値由来の確定値を保持する（#124）。
   * 台帳 (YukyuLedgerService) の開繰越ロットはこの値をシードに使う。minKi 行のみ非 null（他行は null）。
   * ※ 旧「期末一括失効」モデルの prevKurikoshi/kurikoshi/jiko/month01..12 チェーンは #124 で撤去済み（本列が後継）。
   */
  openingCarryoverDays: number | null;
  /**
   * 有給付与日数の手動 override (Phase 1 of fiscal-year-change-2026)。
   * null なら getGrantedYukyu の自動計算値 (granted) を使用。設定されている場合は granted/grantedOrigin を
   * 上書きし、recomputeAnnualYukyu 経由でも保護される。
   * 想定用途: 決算期変更時の特例措置（12 期=変則 4 ヶ月、13 期=新基準初年度）や、就業規則の比例調整に
   * 収まらない個別合意（wpw<5 の社員で標準ロジックと異なる付与等）。
   */
  grantedOverride: number | null;
  /** override の根拠 (監査用)。例: "決算期変更 12 期特例措置 (2026-05 社労士確認)" */
  grantedOverrideReason: string | null;
  /** override を設定したオペレータのメール */
  grantedOverrideBy: string | null;
  /** override を設定した日時 */
  grantedOverrideAt: string | null;
  /**
   * 有給使用日数の手動調整 (fiscal-year-change-2026 Phase 3-2 拡張)。
   * null なら totalUsed をそのまま消化日数として扱う。設定されている場合は台帳 (YukyuLedgerService) が
   * 残高計算で effectiveTotalUsed = totalUsed - totalUsedAdjustment に上限キャップする
   * （totalUsed カラムは Kintai 由来の raw 値を維持）。
   * 想定用途: 過去 Kintai データが本人の登録ミス等で過剰計上されており、HR 側で人事的に
   * 相殺調整した日数を「使用扱いしない」と確定したケース (例: 平内 11 期 16 日)。
   */
  totalUsedAdjustment: number | null;
  /** adjustment の根拠 (監査用)。例: "HR 確定: 本人の勤怠登録ミス分 16 日を相殺 (2026-05)" */
  totalUsedAdjustmentReason: string | null;
  /** adjustment を設定したオペレータのメール */
  totalUsedAdjustmentBy: string | null;
  /** adjustment を設定した日時 */
  totalUsedAdjustmentAt: string | null;
  /** 作成日 */
  created_at: string;
  /** 更新日 */
  updated_at: string;
  /** 作成者 */
  created_by: string | null;
  /** 更新者 */
  updated_by: string | null;
}
