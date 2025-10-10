!(function (e, o) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = o())
    : 'function' == typeof define && define.amd
      ? define([], o)
      : 'object' == typeof exports
        ? (exports.ODSCharts = o())
        : (e.ODSCharts = o());
})(this, () =>
  (() => {
    'use strict';
    var e = {
        d: (o, t) => {
          for (var s in t) e.o(t, s) && !e.o(o, s) && Object.defineProperty(o, s, { enumerable: !0, get: t[s] });
        },
        o: (e, o) => Object.prototype.hasOwnProperty.call(e, o),
        r: (e) => {
          ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 }));
        },
      },
      o = {};
    (e.r(o),
      e.d(o, {
        DEFAULT_ARROW_SIZE: () => y,
        ODSChartsCSSLegendsDefinition: () => a,
        ODSChartsCSSPopoverDefinition: () => i,
        ODSChartsCSSThemeDefinition: () => l,
        ODSChartsCSSThemes: () => c,
        ODSChartsCSSThemesNames: () => s,
        ODSChartsColorsSet: () => ie,
        ODSChartsConfiguration: () => fe,
        ODSChartsDialGaugeConfiguration: () => be,
        ODSChartsGaugeConfiguration: () => ve,
        ODSChartsItemCSSDefinition: () => r,
        ODSChartsItemGroupCSSDefinition: () => n,
        ODSChartsLegendHolderDefinition: () => pe,
        ODSChartsLineConfiguration: () => ge,
        ODSChartsLineStyle: () => le,
        ODSChartsMode: () => ce,
        ODSChartsPopoverAxisPointer: () => S,
        ODSChartsPopoverConfig: () => k,
        ODSChartsPopoverDefinition: () => x,
        ODSChartsPopoverDefinitionWithRenderer: () => w,
        ODSChartsPopoverItem: () => C,
        ODSChartsPopoverManager: () => m,
        ODSChartsPopoverManagers: () => D,
        ODSChartsPopoverTooltipTrigger: () => L,
        ODSChartsTheme: () => he,
        ODSChartsTypes: () => ue,
        ODS_PROJECT: () => t,
        getThemeManager: () => Pe,
      }));
    const t = {
      color: ['#4bb4e6', '#50be87', '#ffb4e6', '#a885d8', '#ffd200'],
      backgroundColor: 'var(--bs-body-bg, transparent)',
      textStyle: {},
      title: { textStyle: { color: 'var(--bs-body-color, #000000)' }, subtextStyle: { color: 'var(--bs-secondary-color, #666666)' } },
      line: { itemStyle: { borderWidth: 1 }, lineStyle: { width: 2 }, symbolSize: 0, symbol: 'emptyCircle', smooth: !0 },
      radar: { itemStyle: { borderWidth: 1 }, lineStyle: { width: 2 }, symbolSize: 4, symbol: 'emptyCircle', smooth: !1 },
      bar: { itemStyle: { barBorderWidth: '2', barBorderColor: 'transparent' } },
      pie: { itemStyle: { borderWidth: '2', borderColor: 'var(--bs-body-bg, #ffffff)' } },
      scatter: { itemStyle: { borderWidth: '2', borderColor: 'var(--bs-body-bg, #ffffff)' } },
      boxplot: { itemStyle: { borderWidth: '2', borderColor: 'var(--bs-body-bg, #ffffff)' } },
      parallel: { itemStyle: { borderWidth: '2', borderColor: 'var(--bs-body-bg, #ffffff)' } },
      sankey: { itemStyle: { borderWidth: '2', borderColor: 'var(--bs-body-bg, #ffffff)' } },
      funnel: { itemStyle: { borderWidth: '2', borderColor: 'var(--bs-body-bg, #ffffff)' } },
      gauge: { itemStyle: { borderWidth: '2', borderColor: 'var(--bs-body-bg, #ffffff)' } },
      candlestick: {
        itemStyle: {
          color: 'var(--bs-success, #32c832)',
          color0: 'var(--bs-danger, #cd3c14)',
          borderColor: 'var(--bs-success, #228722)',
          borderColor0: 'var(--bs-danger, #cd3c14)',
          borderWidth: 1,
        },
      },
      graph: {
        itemStyle: { borderWidth: '2', borderColor: 'var(--bs-body-bg, #ffffff)' },
        lineStyle: { width: 1, color: 'var(--bs-secondary-color, #666666)' },
        symbolSize: 4,
        symbol: 'emptyCircle',
        smooth: !1,
        color: ['#4bb4e6', '#50be87', '#ffb4e6', '#a885d8', '#ffd200'],
        label: { color: 'var(--bs-body-color, #000000)' },
      },
      map: {
        itemStyle: { areaColor: 'var(--bs-secondary-bg, #eeeeee)', borderColor: 'var(--bs-secondary-color, #444444)', borderWidth: 0.5 },
        label: { color: 'var(--bs-body-color, #000000)' },
        emphasis: {
          itemStyle: { areaColor: 'rgba(var(--bs-warning-rgb, 255,215,0),0.8)', borderColor: 'var(--bs-secondary-color, #444444)', borderWidth: 1 },
          label: { color: 'var(--bs-black, rgb(100,0,0))' },
        },
      },
      geo: {
        itemStyle: { areaColor: 'var(--bs-secondary-bg, #eeeeee)', borderColor: 'var(--bs-secondary-color, #444444)', borderWidth: 0.5 },
        label: { color: 'var(--bs-body-color, #000000)' },
        emphasis: {
          itemStyle: { areaColor: 'rgba(var(--bs-warning-rgb, 255,215,0),0.8)', borderColor: 'var(--bs-secondary-color, #444444)', borderWidth: 1 },
          label: { color: 'var(--bs-black, rgb(100,0,0))' },
        },
      },
      categoryAxis: {
        axisLine: { show: !0, lineStyle: { color: 'var(--bs-border-color-subtle, #cccccc)' } },
        axisTick: { show: !1, lineStyle: { color: 'var(--bs-danger, #eb0909)' } },
        axisLabel: { show: !0, color: 'var(--bs-body-color, #000000)' },
        splitLine: { show: !1, lineStyle: { color: ['var(--bs-border-color-subtle, #cccccc)'] } },
        splitArea: { show: !1, areaStyle: { color: ['var(--bs-body-bg, #ffffff)'] } },
      },
      valueAxis: {
        axisLine: { show: !0, lineStyle: { color: 'var(--bs-border-color-subtle, #cccccc)' } },
        axisTick: { show: !1, lineStyle: { color: 'var(--secondary-color, #6E7079)' } },
        axisLabel: { show: !0, color: 'var(--bs-body-color, #000000)' },
        splitLine: { show: !1, lineStyle: { color: ['var(--bs-border-color-subtle, #cccccc)'] } },
        splitArea: { show: !1, areaStyle: { color: ['rgba(var(--bs-body-bg-rgb, 250,250,250),0.2)', 'rgba(var(--bs-tertiary-color-rgb, 210,219,238),0.2)'] } },
      },
      logAxis: {
        axisLine: { show: !1, lineStyle: { color: 'var(--bs-border-color-subtle, #cccccc)' } },
        axisTick: { show: !1, lineStyle: { color: 'var(--bs-secondary-color, #6E7079)' } },
        axisLabel: { show: !0, color: 'var(--bs-body-color, #000000)' },
        splitLine: { show: !1, lineStyle: { color: ['var(--bs-border-color-subtle, #cccccc)'] } },
        splitArea: { show: !1, areaStyle: { color: ['rgba(var(--bs-body-bg-rgb, 250,250,250),0.2)', 'rgba(var(--bs-tertiary-color-rgb, 210,219,238),0.2)'] } },
      },
      timeAxis: {
        axisLine: { show: !0, lineStyle: { color: 'var(--bs-border-color-subtle, #cccccc)' } },
        axisTick: { show: !1, lineStyle: { color: 'var(--bs-border-color-subtle, #cccccc)' } },
        axisLabel: { show: !0, color: 'var(--bs-body-color, #000000)' },
        splitLine: { show: !1, lineStyle: { color: ['var(--bs-border-color-subtle, #cccccc)'] } },
        splitArea: { show: !1, areaStyle: { color: ['rgba(var(--bs-body-bg-rgb, 250,250,250),0.2)', 'rgba(var(--bs-tertiary-color-rgb, 210,219,238),0.2)'] } },
      },
      toolbox: { iconStyle: { borderColor: 'var(--bs-secondary-color, #999999)' }, emphasis: { iconStyle: { borderColor: 'var(--bs-body-color, #666666)' } } },
      legend: { textStyle: { color: 'var(--bs-body-color, #333333)' } },
      tooltip: {
        axisPointer: {
          lineStyle: { color: 'var(--bs-border-color-subtle, #cccccc)', width: 1 },
          crossStyle: { color: 'var(--bs-border-color-subtle, #cccccc)', width: 1 },
        },
      },
      timeline: {
        lineStyle: { color: 'var(--bs-tertiary-bg, #dae1f5)', width: 2 },
        itemStyle: { color: 'var(--bs-secondary-bg, #a4b1d7)', borderWidth: 1 },
        controlStyle: { color: 'var(--bs-secondary-bg, #a4b1d7)', borderColor: 'var(--bs-secondary-bg, #a4b1d7)', borderWidth: 1 },
        checkpointStyle: { color: 'var(--bs-info, #316bf3)', borderColor: 'var(--bs-body-bg, #ffffff)' },
        label: { color: 'var(--bs-secondary-bg, #a4b1d7)' },
        emphasis: {
          itemStyle: { color: 'var(--bs-body-bg, #ffffff)' },
          controlStyle: { color: 'var(--bs-secondary-bg, #a4b1d7)', borderColor: 'var(--bs-secondary-bg, #a4b1d7)', borderWidth: 1 },
          label: { color: 'var(--bs-secondary-bg, #a4b1d7)' },
        },
      },
      visualMap: { color: ['#085ebd', '#3179c8', '#5a94d3', '#84afde', '#adc9e9', '#d6e4f4'] },
      markPoint: { label: { color: 'var(--bs-body-color, #000000)' }, emphasis: { label: { color: 'var(--bs-body-color, #000000)' } } },
    };
    var s;
    !(function (e) {
      ((e.NONE = 'NONE'), (e.BOOSTED4 = 'BOOSTED4'), (e.BOOSTED5 = 'BOOSTED5'), (e.CUSTOM = 'CUSTOM'));
    })(s || (s = {}));
    class r {
      static getClasses(e) {
        return e && e.classes ? e.classes.join(' ') : '';
      }
      static getStyles(e) {
        return e && e.styles
          ? Object.keys(e.styles)
              .map((o) => `${o}: ${e.styles[o]}`)
              .join('; ')
          : '';
      }
    }
    class n {}
    class a extends n {}
    class i extends n {}
    class l {
      constructor() {
        ((this.legends = void 0), (this.popover = void 0));
      }
    }
    const c = {
      BOOSTED4: {
        legends: {
          odsChartsLegendHolder: { classes: ['pt-2', 'pb-3'] },
          odsChartsLegendContainer: { classes: ['d-flex', 'flex-wrap', 'justify-content-start'] },
          odsChartsLegendContainerVertical: { classes: ['flex-column'] },
          odsChartsLegendContainerHorizontal: { classes: ['mx-4'] },
          odsChartsLegendLink: { classes: ['mx-2', 'pb-2', 'text-decoration-none'], styles: { opacity: '1' } },
          odsChartsLegendLinkOpacity: { classes: ['opacity-25'], styles: { opacity: '.25' } },
          odsChartsLegendColorHolder: { classes: ['d-inline-block'] },
          odsChartsLegendColor: { classes: ['d-block', 'position-relative', 'mr-1'], styles: { width: '12px', height: '12px' } },
          odsChartsLegendLabel: { classes: ['font-weight-normal', 'small'] },
        },
        popover: {
          odsChartsPopoverLine: { classes: ['text-nowrap', 'd-flex', 'align-items-center', 'mb-1'] },
          odsChartsPopoverColorHolder: { classes: ['d-inline-block', 'mr-1'] },
          odsChartsPopoverColor: { classes: ['d-block', 'position-relative'], styles: { width: '12px', height: '12px' } },
          odsChartsPopoverText: { classes: ['flex-grow-1', 'd-flex', 'small', 'm-0'] },
          odsChartsPopoverLabel: { classes: ['mr-2', 'flex-grow-1'] },
          odsChartsPopoverValue: { classes: ['font-weight-bold'] },
        },
      },
      BOOSTED5: {
        legends: {
          odsChartsLegendHolder: { classes: ['pt-2', 'pb-3'] },
          odsChartsLegendContainer: { classes: ['d-flex', 'flex-wrap', 'justify-content-start'] },
          odsChartsLegendContainerVertical: { classes: ['flex-column'] },
          odsChartsLegendContainerHorizontal: { classes: ['mx-4'] },
          odsChartsLegendLink: { classes: ['mx-2', 'pb-2', 'text-decoration-none'] },
          odsChartsLegendLinkOpacity: { classes: ['opacity-25'] },
          odsChartsLegendColorHolder: { classes: ['d-inline-block'] },
          odsChartsLegendColor: { classes: ['d-block', 'position-relative', 'me-1'], styles: { width: '12px', height: '12px' } },
          odsChartsLegendLabel: { classes: ['fw-normal', 'small'] },
        },
        popover: {
          odsChartsPopoverLine: { classes: ['text-nowrap', 'd-flex', 'align-items-center', 'mb-1'] },
          odsChartsPopoverColorHolder: { classes: ['d-inline-block', 'me-1'] },
          odsChartsPopoverColor: { classes: ['d-block', 'position-relative'], styles: { width: '12px', height: '12px' } },
          odsChartsPopoverText: { classes: ['flex-grow-1', 'd-flex', 'small'] },
          odsChartsPopoverLabel: { classes: ['me-2', 'flex-grow-1'] },
          odsChartsPopoverValue: { classes: ['fw-bold'] },
        },
      },
      NONE: {
        legends: { odsChartsLegendHolder: { classes: ['ods-charts-no-css-lib'] } },
        popover: {
          odsChartsPopoverHolder: { classes: ['ods-charts-no-css-lib'] },
          odsChartsPopover: { classes: ['ods-charts-no-css-lib'] },
          odsChartsPopoverBodyContent: { classes: ['ods-charts-no-css-lib'] },
          odsChartsPopoverLine: { classes: ['ods-charts-no-css-lib'] },
        },
      },
      CUSTOM: { legends: {}, popover: {} },
    };
    function d(e) {
      return e && Array.isArray(e);
    }
    function h(e) {
      return 'object' == typeof e && !d(e);
    }
    function p(e, o, ...t) {
      if (t && d(t) && 0 < t.length) return p(p(e, o), t[0], ...t.slice(1));
      if ((h(e) && h(o)) || (d(e) && d(o))) for (const t of Object.keys(o)) (h(e[t]) && h(o[t])) || (d(e[t]) && d(o[t])) ? p(e[t], o[t]) : (e[t] = o[t]);
      return e;
    }
    class u {
      constructor(e, o) {
        ((this.echart = e), (this.legendHolders = o));
      }
      static addLegend(e, o) {
        const t = d(o) ? o : h(o) ? [o] : [{ legendHolderSelector: o }];
        return new u(e, t);
      }
      static getLegendData(e, o = !0, t = !0) {
        let s,
          r = e.legend && e.legend.data ? e.legend.data.map((e) => (h(e) ? e.name : e)) : [];
        const n = 1 === e.series.length && e.series[0].data && ['pie'].includes(e.series[0].type);
        if (
          (o && e.legend && (e.legend = Object.assign({}, e.legend)),
          t && e.series && (e.series = [...e.series.map((e) => Object.assign({}, e))]),
          !e.legend || !e.legend.data)
        )
          if (e.dataset && e.dataset.source)
            try {
              (o && !e.legend && (e.legend = {}), (r = e.dataset.source[0].reduce((e, o, t) => (t > 0 && e.push(o), e), [])), o && (e.legend.data = r));
            } catch (e) {
              throw new Error('Missing data array of legends in legend chart option');
            }
          else {
            if (!e.series) throw new Error('Missing data array of legends in legend chart option');
            (o && !e.legend && (e.legend = {}),
              (r = n
                ? e.series[0].data.map((e, o) => {
                    if (!e.name) throw new Error('Missing data array of legends in legend chart option');
                    return e.name;
                  })
                : e.series.map((e, o) => {
                    if (!e.name) throw new Error('Missing data array of legends in legend chart option');
                    return e.name;
                  })),
              o && (e.legend.data = r));
          }
        if (n)
          s = e.series[0].data.map((e, o) => {
            if (!e.name) throw new Error('Missing data array of legends in legend chart option');
            return e.name;
          });
        else {
          if ((t && !e.series && (e.series = r.map((e, o) => ({ name: r[o] || 'serie_Name_' + o }))), !e.series))
            throw new Error('Missing series array in chart option');
          const o = r.filter((o) => !e.series.find((e) => e.name === o));
          s = e.series.map((e, s) => {
            if (!e.name) {
              if (!t) throw new Error('Missing series names in chart option');
              e.name = o.shift() || 'serie_Name_' + s;
            }
            return e.name;
          });
        }
        let a = r.filter((e) => s.includes(e)),
          i = a;
        return (
          r.length !== a.length &&
            (console.info(
              `The legend data array contains some legends that do not match any series name. Legend data: [${r}]. Series names: [${s}]. Displayed legends: [${a}]`
            ),
            (i = r),
            i.length > s.length && (i = i.filter((e, o) => o < s.length)),
            (a = s.filter((e, o) => o < i.length)),
            console.info(`Displayed legends labels have been mapped by their index, [${i}] are the labels of the displayed series [${a}]`)),
          { names: a, labels: i }
        );
      }
      addLegend(e, o, t, r, n) {
        if (s.NONE === r && !document.querySelector('#ods-chart-legends-none-css')) {
          let e = document.createElement('style');
          ((e.id = 'ods-chart-legends-none-css'),
            (e.textContent =
              '.ods-charts-no-css-lib.ods-charts-legend-holder {\n  padding-top: 10px;\n  padding-bottom: 20px;\n  position: relative;\n}\n\n.ods-charts-no-css-lib .ods-charts-legend-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.ods-charts-no-css-lib .ods-charts-legend-container-vertical {\n  flex-direction: column;\n}\n\n\n.ods-charts-no-css-lib .ods-charts-legend-container-horizontal {\n  margin-left: 30px;\n  margin-right: 30px;\n}\n\n.ods-charts-no-css-lib .ods-charts-legend-link {\n  text-decoration: none;\n  padding-bottom: 0.625rem;\n  margin-right: 10px;\n  margin-left: 10px;\n  color: var(--bs-body-color, #000000);\n}\n.ods-charts-no-css-lib .ods-charts-legend-link.ods-charts-legend-link-opacity {\n  opacity: .25;\n}\n\n.ods-charts-no-css-lib .ods-charts-legend-color-holder {\n  display: inline-block;\n}\n\n.ods-charts-no-css-lib .ods-charts-legend-color {\n  margin-right: 5px;\n  width: 12px;\n  height: 12px;\n  position: relative;\n  display: block;\n}\n.ods-charts-no-css-lib .ods-charts-legend-label {\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16px;\n}\n\n[data-bs-theme="dark"] .ods-charts-no-css-lib.ods-charts-legend-holder {\n  background-color: var(--bs-gray-950, #141414);\n}\n[data-bs-theme="dark"] .ods-charts-no-css-lib.ods-charts-legend-holder .ods-charts-legend-link {\n  color: var(--bs-white, #fff);\n}\n[data-bs-theme="light"] .ods-charts-no-css-lib.ods-charts-legend-holder {\n  background-color: var(--bs-white, #fff);\n}\n[data-bs-theme="light"] .ods-charts-no-css-lib.ods-charts-legend-holder .ods-charts-legend-link {\n  color: var(--bs-black, #000);\n}\n'),
            document.head.appendChild(e));
        }
        if (e && e.legend && e.legend.orient) for (const o of this.legendHolders) o.orientation || (o.orientation = e.legend.orient);
        const a = u.getLegendData(e),
          i = {};
        let l;
        for (const e of this.legendHolders) {
          if (!document.querySelector(e.legendHolderSelector)) throw new Error(`No legend holder found with selector ${e.legendHolderSelector}`);
          ((i[e.legendHolderSelector] = Object.assign(Object.assign({}, e), { legends: { labels: [], names: [], index: [] } })),
            e.seriesRef || (l = i[e.legendHolderSelector]));
        }
        for (let o = 0; o < a.names.length && o < a.labels.length; o++) {
          let t = Object.keys(i).find((e) => {
            var t, s;
            return (
              !!i[e].seriesRef &&
              ((null === (t = i[e].seriesRef) || void 0 === t ? void 0 : t.includes(a.names[o])) ||
                (null === (s = i[e].seriesRef) || void 0 === s ? void 0 : s.includes(a.labels[o])))
            );
          });
          if (!t) {
            const s = e.series && e.series.find((e) => e.name === a.names[o]);
            s &&
              s.stack &&
              (t = Object.keys(i).find((e) => {
                var o;
                return !!i[e].seriesRef && (null === (o = i[e].seriesRef) || void 0 === o ? void 0 : o.includes(s.stack));
              }));
          }
          t
            ? (i[t].legends.labels.push(a.labels[o]), i[t].legends.names.push(a.names[o]), i[t].legends.index.push(o))
            : l && (l.legends.labels.push(a.labels[o]), l.legends.names.push(a.names[o]), l.legends.index.push(o));
        }
        e.legend.show = !1;
        for (const e of Object.keys(i)) {
          if ((this.generateHandler(e, t), !document.querySelector(e))) throw new Error(`Can't find legend holder using the selector ${e}`);
          document.querySelector(e).innerHTML = this.generateLegend(e, o, i[e].legends, t, n, i[e].orientation, i[e].postItemContent);
        }
      }
      generateLegend(e, o, t, s, n, a = 'horizontal', i) {
        var l, c, d, h, p, u, g, v;
        return `<div class="ods-charts-legend-holder ods-charts-mode-${n} ${r.getClasses(null === (l = s.legends) || void 0 === l ? void 0 : l.odsChartsLegendHolder)}"\n    style="${r.getStyles(null === (c = s.legends) || void 0 === c ? void 0 : c.odsChartsLegendHolder)}"\n    >\n    <div class="ods-charts-legend-container ods-charts-legend-container-${a} ${r.getClasses(null === (d = s.legends) || void 0 === d ? void 0 : d.odsChartsLegendContainer)} ${'vertical' === a ? r.getClasses(null === (h = s.legends) || void 0 === h ? void 0 : h.odsChartsLegendContainerVertical) : r.getClasses(null === (p = s.legends) || void 0 === p ? void 0 : p.odsChartsLegendContainerHorizontal)}"\n    style="${r.getStyles(null === (u = s.legends) || void 0 === u ? void 0 : u.odsChartsLegendContainer)} ${'vertical' === a ? r.getStyles(null === (g = s.legends) || void 0 === g ? void 0 : g.odsChartsLegendContainerVertical) : r.getStyles(null === (v = s.legends) || void 0 === v ? void 0 : v.odsChartsLegendContainerHorizontal)}"\n    >\n    ${(t
          ? t.labels
          : []
        )
          .map((n, a) => {
            var l, c, d, h, p, u, g, v;
            let b = t.index[a] % o.length;
            const f = `<a class="ods-charts-legend-link ${r.getClasses(null === (l = s.legends) || void 0 === l ? void 0 : l.odsChartsLegendLink)}" \n      style="${r.getStyles(null === (c = s.legends) || void 0 === c ? void 0 : c.odsChartsLegendLink)}"\n      href="javascript:" onclick="ods_chart_legend_switchLegend[${JSON.stringify(e).replace(/"/g, '&quot;')}](this, ${JSON.stringify(t.names[a]).replace(/"/g, '&quot;')})">\n      <span class="ods-charts-legend-color-holder ${r.getClasses(null === (d = s.legends) || void 0 === d ? void 0 : d.odsChartsLegendColorHolder)}"\n      style="${r.getStyles(null === (h = s.legends) || void 0 === h ? void 0 : h.odsChartsLegendColorHolder)}">  \n      <span style="background-color:${o[b]}; ${r.getStyles(null === (p = s.legends) || void 0 === p ? void 0 : p.odsChartsLegendColor)}" class="ods-charts-legend-color ${r.getClasses(null === (u = s.legends) || void 0 === u ? void 0 : u.odsChartsLegendColor)}"></span>\n      </span>\n  \n    <label class="ods-charts-legend-label ${r.getClasses(null === (g = s.legends) || void 0 === g ? void 0 : g.odsChartsLegendLabel)}"\n    style="${r.getStyles(null === (v = s.legends) || void 0 === v ? void 0 : v.odsChartsLegendLabel)}"\n    role="button">${n}</label>\n  </a>`,
              y = a === ((null == t ? void 0 : t.labels.length) || 0) - 1;
            return f + this.getCustomLegendContent(n, i, y);
          })
          .join('\n    ')}\n    </div>\n    </div>`;
      }
      getCustomLegendContent(e, o, t = !1) {
        return o ? ('function' == typeof o ? o(e) : 'string' == typeof o ? (t ? o : '') : ('object' == typeof o && o[e]) || '') : '';
      }
      generateHandler(e, o) {
        (window.ods_chart_legend_switchLegend || (window.ods_chart_legend_switchLegend = {}),
          (window.ods_chart_legend_switchLegend[e] = (e, t) => {
            const s = !e.classList.contains('ods-charts-legend-link-opacity'),
              r =
                o.legends && o.legends.odsChartsLegendLinkOpacity && o.legends.odsChartsLegendLinkOpacity.classes
                  ? o.legends.odsChartsLegendLinkOpacity.classes
                  : [],
              n = s
                ? o.legends && o.legends.odsChartsLegendLinkOpacity && o.legends.odsChartsLegendLinkOpacity.styles
                  ? o.legends.odsChartsLegendLinkOpacity.styles
                  : {}
                : o.legends && o.legends.odsChartsLegendLink && o.legends.odsChartsLegendLink.styles
                  ? o.legends.odsChartsLegendLink.styles
                  : {};
            if (s) {
              e.classList.add('ods-charts-legend-link-opacity');
              for (const o of r) e.classList.add(o);
            } else {
              e.classList.remove('ods-charts-legend-link-opacity');
              for (const o of r) e.classList.remove(o);
            }
            for (const o of Object.keys(n)) e.style[o] = n[o];
            this.echart.dispatchAction({ type: s ? 'legendUnSelect' : 'legendSelect', name: t });
          }));
      }
    }
    class g {
      constructor(e, o) {
        ((this.echart = e), (this.chartId = o), (this.observer = void 0));
      }
      static addResizeManagement(e, o) {
        return new g(e, o);
      }
      get divElement() {
        let e;
        return ((e = document.getElementById(this.chartId) || void 0), e || ((e = this.echart.getDom() || void 0), e && (e = e.parentElement || void 0)), e);
      }
      addResizeManagement() {
        this.removeListener();
        const e = this.divElement;
        e && ResizeObserver
          ? ((this.observer = new ResizeObserver(this.resizeChart.bind(this))), this.observer.observe(e))
          : ((g.sizeListeners[this.chartId] = this.resizeChart.bind(this)), window.addEventListener('resize', g.sizeListeners[this.chartId]));
      }
      removeListener() {
        try {
          const e = this.divElement;
          e && ResizeObserver
            ? this.observer && (this.observer.unobserve(e), (this.observer = void 0))
            : g.sizeListeners[this.chartId] && (window.removeEventListener('resize', g.sizeListeners[this.chartId]), delete g.sizeListeners[this.chartId]);
        } catch (e) {}
      }
      resizeChart() {
        try {
          const e = this.echart.getOption(),
            o = {};
          (e.animation &&
            (o.animation = {
              duration: 'number' == typeof e.animationDuration ? e.animationDuration : 1e3,
              easing: e.animationEasing ? e.animationEasing : 'cubicInOut',
            }),
            this.echart.resize(o));
        } catch (e) {
          this.removeListener();
        }
      }
    }
    function v(e) {
      var o = 0;
      if (('string' != typeof e && (e = JSON.stringify(e)), 0 == e.length)) return '' + o;
      for (let t = 0; t < e.length; t++) ((o = (o << 5) - o + e.charCodeAt(t)), (o &= o));
      return '' + o;
    }
    function b(e) {
      return 'string' == typeof e ? e : v(e);
    }
    function f(e) {
      if (h(e)) {
        const o = {};
        for (const t of Object.keys(e)) o[t] = f(e[t]);
        return o;
      }
      if (d(e)) {
        const o = [];
        for (let t = 0; t < e.length; t++) o[t] = f(e[t]);
        return o;
      }
      return e;
    }
    g.sizeListeners = {};
    const y = 0;
    class m {
      constructor() {
        ((this.dispose = void 0), (this.show = void 0));
      }
    }
    class C {
      constructor() {
        ((this.seriesName = void 0), (this.markerColor = void 0));
      }
    }
    class x {}
    class w extends x {
      testIfMouseIsOverTooltip(e) {
        var o;
        try {
          const t = { top: window.event.clientY, left: window.event.clientX },
            s = null === (o = e.tip) || void 0 === o ? void 0 : o.getBoundingClientRect();
          if (
            s &&
            t.top > s.top - this.tooltipMarging &&
            t.top < s.top + s.height + this.tooltipMarging &&
            t.left > s.left - this.tooltipMarging &&
            t.left < s.left + s.width + this.tooltipMarging
          )
            return !0;
        } catch (e) {}
        return !1;
      }
    }
    var S, L;
    (!(function (e) {
      ((e.none = 'none'), (e.shadow = 'shadow'), (e.line = 'line'), (e.cross = 'cross'));
    })(S || (S = {})),
      (function (e) {
        ((e.xAxis = 'xAxis'), (e.yAxis = 'yAxis'), (e.grid = 'grid'));
      })(L || (L = {})));
    class k {}
    const D = {
      BOOSTED5: new (class extends w {
        constructor() {
          (super(...arguments),
            (this.testAvailability = () => {
              let e = !0;
              try {
                void 0 === boosted && (e = !1);
              } catch (o) {
                e = !1;
              }
              return (e || console.warn('BOOSTED 5 popover/tooltip rendering is not avalable: boosted variable is not accessible!'), e);
            }),
            (this.getOrCreatePopupInstance = this._getOrCreatePopupInstance.bind(this)),
            (this.tooltipDelay = 0),
            (this.tooltipMarging = 15));
        }
        _getOrCreatePopupInstance(e, o, t, s, r) {
          var n;
          try {
            let o = boosted.Popover.getInstance(document.querySelector(e));
            if (o) {
              if (s && this.testIfMouseIsOverTooltip(o)) return;
              o.dispose();
            }
          } catch (e) {}
          const a = f(boosted.Tooltip.Default.allowList);
          ((a.span = ['style', 'class']), (a.div = ['class']), (a.label = ['class']));
          let i = document.getElementById('ods-chart-popover-container-' + r);
          return (
            i ||
              ((i = document.createElement('div')),
              [ce.DARK, ce.LIGHT].includes(r) && i.setAttribute('data-bs-theme', r),
              (i.id = 'ods-chart-popover-container-' + r),
              i.classList.add('ods-charts-context'),
              null === (n = document.querySelector('body')) || void 0 === n || n.append(i)),
            boosted.Popover.getOrCreateInstance(document.querySelector(e), {
              allowList: a,
              html: !0,
              trigger: 'click',
              placement: 'top',
              container: i,
              title: o,
              content: t,
              customClass: s ? '' : 'pe-none',
            })
          );
        }
      })(),
      BOOSTED4: new (class extends w {
        constructor() {
          (super(...arguments),
            (this.testAvailability = () => {
              let e = !0;
              try {
                void 0 === boosted && (e = !1);
              } catch (o) {
                e = !1;
              }
              return (e || console.warn('BOOSTED 4 popover/tooltip rendering is not avalable: boosted variable is not accessible!'), e);
            }),
            (this.getOrCreatePopupInstance = this._getOrCreatePopupInstance.bind(this)),
            (this.tooltipDelay = 0),
            (this.tooltipMarging = 10));
        }
        _getOrCreatePopupInstance(e, o, t, s, r) {
          var n;
          const a = document.querySelector(e),
            i = f(boosted.Tooltip.Default.whiteList);
          if (((i.span = ['style', 'class']), (i.div = ['class']), (i.label = ['class']), a && a.chartPopover))
            try {
              if (s && this.testIfMouseIsOverTooltip(a.chartPopover)) return;
              if (a.chartPopover.config.title === o && a.chartPopover.config.content === t) return void a.chartPopover.update();
              a.chartPopover.dispose();
            } catch (e) {}
          let l = document.getElementById('ods-chart-popover-container-' + r);
          l ||
            ((l = document.createElement('div')),
            [ce.DARK, ce.LIGHT].includes(r) && l.setAttribute('data-bs-theme', r),
            (l.id = 'ods-chart-popover-container-' + r),
            l.classList.add('ods-charts-context'),
            null === (n = document.querySelector('body')) || void 0 === n || n.append(l));
          const c = new boosted.Popover(a, { whiteList: i, html: !0, trigger: 'click', placement: 'top', container: l, title: o, content: t, customClass: '' });
          return (
            (a.chartPopover = c),
            s ||
              window.setTimeout(() => {
                try {
                  a.chartPopover.tip.style.pointerEvents = 'none';
                } catch (e) {}
              }),
            c
          );
        }
      })(),
      NONE: {},
    };
    var O;
    function A(e) {
      return e && (e.data || (e.type && Object.values(O).includes(e.type)));
    }
    !(function (e) {
      ((e.category = 'category'), (e.time = 'time'));
    })(O || (O = {}));
    const E = `\n.ods-charts-popover {\n  margin: 0 !important;\n  padding: 0 !important;\n  border: none !important;\n  box-shadow: none !important;\n  background: none !important;\n}\n  \n.ods-charts-popover.ods-charts-enterable-false {\n  pointer-events: none !important;\n}\n\n.ods-charts-popover .ods-charts-popover-inner  {\n  display: inline-block;\n  background-color: var(--bs-body-bg, #fff);\n  color: var(--bs-body-color, #000);\n  border: 2px solid var(--bs-border-color-subtle, #ccc);  \n  padding-left: var(--ods-popover-body-padding-x, 9px);\n  padding-right: var(--ods-popover-body-padding-x, 9px);\n  padding-top: var(--ods-popover-header-padding-top, 5px);\n  padding-bottom: var(--ods-popover-body-padding-bottom, 7px);\n}\n\n.ods-charts-popover .ods-charts-popover-header {\n  color: var(--bs-body-color, #000);\n  font-size: var(--ods-popover-header-font-size, 14px);\n  font-weight: var(--ods-popover-header-font-weight, 700);\n  line-height: var(--ods-popover-header-line-height, 1.11);\n  padding-bottom:var(--ods-popover-header-padding-bottom, 5px);\n}\n\n.ods-charts-popover .ods-charts-popover-arrow  {\n  display: var(--ods-poppover-arrow-display, ${0 == y ? 'none' : 'inherit'});\n  position: absolute;\n  bottom: -8px;\n  width: 20px;\n  height: 10px;\n  left: calc(50% - 10px);\n}\n\n\n.ods-charts-popover .ods-charts-popover-arrow::before {  \n  position: absolute;\n  display: block;\n  content: "";\n  border-color: transparent;\n  border-top-color: var(--bs-border-color-subtle, #ccc);\n  border-width: 10px;\n  border-bottom-width: 0px;\n  border-style: solid;\n  top: 2px;\n  left: 0;\n}\n\n.ods-charts-popover .ods-charts-popover-arrow::after {\n  border-color: transparent;\n  border-top-color: var(--bs-body-bg, #fff);\n  border-width: 10px;\n  border-bottom-width: 0px;\n  position: absolute;\n  display: block;\n  content: "";\n  border-style: solid;\n  top: 0;\n  left: 0;\n}\n`;
    class T {
      constructor(e, o) {
        ((this.popoverDefinition = e), (this.popoverConfig = o), (this.tooltipStyle = ''), (this.enterable = !1), (this.mode = ce.DEFAULT));
      }
      static addPopoverManagement(e, o) {
        return (
          (void 0 === e || (e.testAvailability && !e.testAvailability())) && (e = D.NONE),
          void 0 === o && (o = {}),
          void 0 === o.enabled && (o.enabled = !0),
          void 0 === o.axisPointer && (o.axisPointer = S.none),
          void 0 === o.shared && (o.shared = !1),
          void 0 === o.tooltip && (o.tooltip = !0),
          void 0 === o.tooltipDelay && (o.tooltipDelay = void 0 === e.tooltipDelay ? 0 : e.tooltipDelay),
          o.shared ||
            'none' === o.axisPointer ||
            (console.warn(
              `If you choose a specific axisPointer like ${o.axisPointer}, the popup/tooltip content will be shared between series values (shared option forced to true)`
            ),
            (o.shared = !0)),
          new T(e, o)
        );
      }
      getTooltipTrigger(e, o) {
        let t = 'cross' === this.popoverConfig.axisPointer ? 'grid' : this.popoverConfig.tooltipTrigger;
        if (null == t) for (const o of ['xAxis', 'yAxis']) A(e[o]) && (t = t ? void 0 : o);
        if (null == t) for (const e of ['xAxis', 'yAxis']) o[e] && o[e].splitLine && o[e].splitLine.show && (t = t ? void 0 : e);
        if (null == t) for (const e of ['xAxis', 'yAxis']) o[e] && o[e].axisLine && o[e].axisLine.show && (t = t ? void 0 : e);
        if (null == t) for (const o of ['xAxis', 'yAxis']) e[o] && e[o].data && (t = t ? void 0 : o);
        return (null == t && (t = 'grid'), t);
      }
      getTooltipElements(e, o) {
        return {
          categoryLabel:
            this.popoverDefinition && this.popoverDefinition.getPopupTitle
              ? this.popoverDefinition.getPopupTitle(e[0].axisValue, e[0].axisValueLabel, e[0].name)
              : e[0].axisValueLabel || e[0].axisValue || e[0].name,
          tooltipElements: e
            .map((e) => {
              const t = o && o.names && o.labels && o.labels.find((t, s) => o.names[s] === e.seriesName),
                s =
                  !d(e.value) || 2 != e.value.length || (e.axisType && !e.axisType.endsWith('.time'))
                    ? d(e.value) && e.seriesIndex + 1 < e.value.length
                      ? e.value[e.seriesIndex + 1]
                      : d(e.value)
                        ? void 0
                        : e.value
                    : e.value[1],
                r = p(f(e), { markerColor: e.color, itemValue: s, label: t || '' });
              return (
                void 0 !== r.itemValue &&
                  this.popoverDefinition &&
                  this.popoverDefinition.getPopupContentValue &&
                  (r.itemValue = this.popoverDefinition.getPopupContentValue(r)),
                r
              );
            })
            .filter((e) => (void 0 === e.itemValue && console.error('failed displaying', e), void 0 !== e.itemValue)),
        };
      }
      addPopoverManagement(e, o, t, n, a) {
        var i, l, c;
        if (((this.mode = a), s.NONE === n && !document.querySelector('#ods-chart-popover-none-css'))) {
          let e = document.createElement('style');
          ((e.id = 'ods-chart-popover-none-css'),
            (e.textContent =
              '\n.ods-charts-no-css-lib .ods-charts-popover-color-holder {\n  display: inline-block;\n}\n\n.ods-charts-no-css-lib .ods-charts-popover-color {\n  margin-right: 5px;\n  width: 12px;\n  height: 12px;\n  position: relative;\n  display: block;\n}\n\n.ods-charts-no-css-lib .ods-charts-popover-line {\n  display: flex;\n  margin-bottom: 5px;\n  white-space: nowrap;\n  align-items: center;\n}\n\n.ods-charts-no-css-lib .ods-charts-popover-text {\n  flex-grow: 1;\n  display: flex;\n  font-size: var(--ods-popover-body-font-size, 14px);\n  font-weight: var(--ods-popover-body-font-weight, 700);\n  line-height: var(--ods-popover-body-line-height, 1.11);\n  color: var(--bs-body-color, #000000);\n}\n\n\n.ods-charts-no-css-lib .ods-charts-popover-label {\n  margin-right: 10px;\n  flex-grow: 1;\n}\n\n.ods-charts-no-css-lib .ods-charts-popover-value {\n  font-weight: 700;\n}\n'),
            document.head.appendChild(e));
        }
        const h = {},
          g = this.getTooltipTrigger(e, o);
        let v;
        this.enterable = !!e && !!e.tooltip && !!e.tooltip.enterable;
        try {
          v = u.getLegendData(e, !1);
        } catch (e) {}
        if (this.popoverConfig.enabled) {
          if (
            (p(h, { tooltip: { appendTo: 'body' }, [g]: { axisPointer: { label: { show: !1 }, handle: { show: !0, icon: 'none' } } } }),
            this.popoverConfig.tooltip || p(h, { tooltip: { triggerOn: 'click', alwaysShowContent: !1 } }),
            this.popoverDefinition.getOrCreatePopupInstance
              ? p(h, {
                  tooltip: {
                    formatter: (e) => {
                      d(e) || (e = [e]);
                      const o = this.getTooltipElements(e, v);
                      if (o && o.tooltipElements.length > 0 && window.event)
                        try {
                          this.displayPopup(window.event, o, t, this.mode);
                        } catch (e) {}
                      return ' ';
                    },
                    appendTo: 'body',
                    className: 'd-none',
                    axisPointer: { type: this.popoverConfig.axisPointer },
                  },
                  [g]: {
                    axisPointer: {
                      snap: !0,
                      show: !0,
                      triggerTooltip: !0,
                      label: { show: !1 },
                      handle: { show: !0, icon: 'none' },
                      lineStyle: { width: 'none' === this.popoverConfig.axisPointer ? 0 : 1 },
                    },
                  },
                })
              : p(h, {
                  tooltip: {
                    position: (o, t, s, r, n) => {
                      var a;
                      let i = { left: o[0] - n.contentSize[0] / 2 };
                      const l = y;
                      if (null === (a = null == e ? void 0 : e.tooltip) || void 0 === a ? void 0 : a.confine) {
                        const e = o[1] > n.contentSize[1];
                        let t;
                        ((i[['top', 'bottom'][+e]] = e ? n.viewSize[1] - o[1] + l : o[1] + l),
                          (t =
                            o[0] > n.viewSize[0] - n.contentSize[0] / 2
                              ? Math.min(o[0] - n.viewSize[0] + n.contentSize[0] - l, n.contentSize[0] - 2 * l - 5)
                              : o[0] < n.contentSize[0] / 2
                                ? Math.max(o[0] - l, 5)
                                : n.contentSize[0] / 2 - l),
                          (this.tooltipStyle = `${t}px;`),
                          e || (this.tooltipStyle += ' top: -8px; transform: scaleY(-1);'));
                      } else i.top = o[1] - n.contentSize[1] - l;
                      return i;
                    },
                    formatter: (e) => {
                      d(e) || (e = [e]);
                      const o = this.getTooltipElements(e, v);
                      return o && o.tooltipElements.length > 0
                        ? new DOMParser().parseFromString(
                            this.popoverDefinition.getPopupTemplate
                              ? this.popoverDefinition.getPopupTemplate(o.categoryLabel, o.tooltipElements)
                              : this.getPopupTemplate(o, t, this.mode),
                            'text/html'
                          ).body.firstChild
                        : void 0;
                    },
                    showDelay: 0,
                    hideDelay: 0,
                    appendTo: 'body',
                    renderMode: 'html',
                    className: `ods-charts-popover ods-charts-enterable-${this.enterable ? 'true' : 'false'} ${r.getClasses(null === (i = t.popover) || void 0 === i ? void 0 : i.odsChartsPopover)}`,
                    axisPointer: { type: this.popoverConfig.axisPointer },
                  },
                  [g]: {
                    axisPointer: {
                      snap: !0,
                      show: !0,
                      triggerTooltip: !0,
                      label: { show: !1 },
                      handle: { show: !0, icon: 'none' },
                      lineStyle: { width: 'none' === this.popoverConfig.axisPointer ? 0 : 1 },
                    },
                  },
                }),
            (null === (l = null == h ? void 0 : h.tooltip) || void 0 === l ? void 0 : l.formatter) && (h.tooltip.formatter.IsOdsChartsFormatter = !0),
            null === (c = null == e ? void 0 : e.tooltip) || void 0 === c ? void 0 : c.formatter)
          ) {
            if (!e.tooltip.formatter.IsOdsChartsFormatter && ((e.tooltip = f(e.tooltip)), !this.popoverDefinition.getPopupContentValue)) {
              const o = e.tooltip.formatter;
              ((this.popoverDefinition = f(this.popoverDefinition)), (this.popoverDefinition.getPopupContentValue = (e) => o([e])));
            }
            delete e.tooltip.formatter;
          }
          this.popoverConfig.shared || 'none' !== this.popoverConfig.axisPointer
            ? p(h, { tooltip: { trigger: 'axis' } })
            : p(h, { tooltip: { trigger: 'item' } });
        } else p(h, { tooltip: { triggerOn: 'none' } });
        p(o, h);
      }
      getPopupContentLine(e, o, t) {
        var s, n, a, i, l, c, d, h, p, u, g, v;
        return `<div \n    class="ods-charts-popover-line ods-charts-mode-${t} ${r.getClasses(null === (s = o.popover) || void 0 === s ? void 0 : s.odsChartsPopoverLine)}"\n    style="${r.getStyles(null === (n = o.popover) || void 0 === n ? void 0 : n.odsChartsPopoverLine)}"    \n    >\n      <span class="ods-charts-popover-color-holder ${r.getClasses(null === (a = o.popover) || void 0 === a ? void 0 : a.odsChartsPopoverColorHolder)}" style="${r.getStyles(null === (i = o.popover) || void 0 === i ? void 0 : i.odsChartsPopoverColorHolder)}" >  \n        <span \n          class="ods-charts-popover-color ${r.getClasses(null === (l = o.popover) || void 0 === l ? void 0 : l.odsChartsPopoverColor)}"  style="background-color:${e.markerColor};  ${r.getStyles(null === (c = o.popover) || void 0 === c ? void 0 : c.odsChartsPopoverColor)};">\n        </span> \n      </span>\n    \n      <label class="ods-charts-popover-text ${r.getClasses(null === (d = o.popover) || void 0 === d ? void 0 : d.odsChartsPopoverText)}" style="${r.getStyles(null === (h = o.popover) || void 0 === h ? void 0 : h.odsChartsPopoverText)}" >\n        <span class="ods-charts-popover-label ${r.getClasses(null === (p = o.popover) || void 0 === p ? void 0 : p.odsChartsPopoverLabel)}" style="${r.getStyles(null === (u = o.popover) || void 0 === u ? void 0 : u.odsChartsPopoverLabel)}" >${e.label ? e.label + ': ' : ''}</span>\n        <span class="ods-charts-popover-value ${r.getClasses(null === (g = o.popover) || void 0 === g ? void 0 : g.odsChartsPopoverValue)}" style="${r.getStyles(null === (v = o.popover) || void 0 === v ? void 0 : v.odsChartsPopoverValue)}">${e.itemValue}</span>\n      </label>\n    </div>\n        `;
      }
      getPopupContent(e, o, t) {
        var s, n;
        return `\n    <div  class="ods-charts-popover-body-content ods-charts-mode-${t} ${r.getClasses(null === (s = o.popover) || void 0 === s ? void 0 : s.odsChartsPopoverBodyContent)}" style="${r.getStyles(null === (n = o.popover) || void 0 === n ? void 0 : n.odsChartsPopoverBodyContent)}" >\n        ${e.map((e) => (this.popoverDefinition.getPopupContentLine ? this.popoverDefinition.getPopupContentLine(e) : this.getPopupContentLine(e, o, t))).join('')}\n    </div>\n    `;
      }
      getPopupTemplate(e, o, t) {
        var s, n, a, i, l, c, d, h, p, u, g, v;
        if (!document.querySelector('#ods-chart-tooltip-default-template')) {
          let e = document.createElement('style');
          ((e.id = 'ods-chart-tooltip-default-template'), (e.textContent = E), document.head.appendChild(e));
        }
        return ` \n  <div class="ods-charts-popover-holder ods-charts-context ods-charts-mode-${t} ${r.getClasses(null === (s = o.popover) || void 0 === s ? void 0 : s.odsChartsPopoverHolder)}" data-bs-theme="${t}" style="${r.getStyles(null === (n = o.popover) || void 0 === n ? void 0 : n.odsChartsPopoverHolder)}">\n    <div class="ods-charts-popover-inner ${r.getClasses(null === (a = o.popover) || void 0 === a ? void 0 : a.odsChartsPopoverInner)}" style="${r.getStyles(null === (i = o.popover) || void 0 === i ? void 0 : i.odsChartsPopoverInner)}">\n      <div class="ods-charts-popover-content ${r.getClasses(null === (l = o.popover) || void 0 === l ? void 0 : l.odsChartsPopoverContent)}" style="${r.getStyles(null === (c = o.popover) || void 0 === c ? void 0 : c.odsChartsPopoverContent)}" >\n        <div class="ods-charts-popover-arrow ${r.getClasses(null === (d = o.popover) || void 0 === d ? void 0 : d.odsChartsPopoverArrow)}" style="${r.getStyles(null === (h = o.popover) || void 0 === h ? void 0 : h.odsChartsPopoverArrow)}; left: ${this.tooltipStyle}" ></div>\n          <div class="ods-charts-popover-header ${r.getClasses(null === (p = o.popover) || void 0 === p ? void 0 : p.odsChartsPopoverHeader)}" style="${r.getStyles(null === (u = o.popover) || void 0 === u ? void 0 : u.odsChartsPopoverHeader)}">${e.categoryLabel}</div>\n          <div class="ods-charts-popover-body ${r.getClasses(null === (g = o.popover) || void 0 === g ? void 0 : g.odsChartsPopoverBody)}" style="${r.getStyles(null === (v = o.popover) || void 0 === v ? void 0 : v.odsChartsPopoverBody)}">\n            ${this.popoverDefinition.getPopupContent ? this.popoverDefinition.getPopupContent(e.tooltipElements) : this.getPopupContent(e.tooltipElements, o, t)}\n          </div>\n        </div>\n      </div>\n    </div>     \n`;
      }
      displayPopup(e, o, t, s) {
        if (0 !== this.popoverConfig.tooltipDelay) {
          if (this.tooltipDelay) return;
          this.tooltipDelay = window.setTimeout(
            () => {
              this.tooltipDelay = void 0;
            },
            this.popoverConfig.tooltipDelay ? this.popoverConfig.tooltipDelay : 200
          );
        }
        let r = '' + Math.ceil(1e5 * Math.random()),
          n = document.querySelector('.libPopupTooltipAnchor');
        (n || document.body.appendChild(new DOMParser().parseFromString('<div class="libPopupTooltipAnchor" ></div>', 'text/html').body.firstChild),
          (n = document.querySelector('.libPopupTooltipAnchor')),
          n.setAttribute('data-id', r),
          n.setAttribute(
            'style',
            `\n                    position: absolute;\n                    top: ${e.pageY}px;\n                    left: ${e.pageX}px;\n                    `
          ));
        try {
          let e = this.popoverDefinition.getOrCreatePopupInstance(
            '.libPopupTooltipAnchor',
            o.categoryLabel,
            this.popoverDefinition.getPopupContent ? this.popoverDefinition.getPopupContent(o.tooltipElements) : this.getPopupContent(o.tooltipElements, t, s),
            this.enterable,
            s
          );
          if (!e) return;
          (e.show(),
            this.tooltipTimeOut && (window.clearTimeout(this.tooltipTimeOut), (this.tooltipTimeOut = void 0)),
            this.popoverConfig.tooltip &&
              (this.tooltipTimeOut = window.setTimeout(
                () => {
                  try {
                    e.dispose();
                  } catch (e) {}
                },
                this.popoverConfig.tooltipTimeout ? this.popoverConfig.tooltipTimeout : 3e3
              )),
            window.setTimeout(() => {
              addEventListener(
                'click',
                (o) => {
                  if (n.getAttribute('data-id') === r)
                    try {
                      e.dispose();
                    } catch (e) {}
                },
                { once: !0 }
              );
            }));
        } catch (e) {
          console.log(e);
        }
      }
    }
    class P {
      constructor(e, o) {
        ((this.echart = e), (this.redraw = o));
      }
      static addThemeObserver(e, o) {
        return new P(e, o);
      }
      get divElement() {
        let e;
        try {
          e = this.echart.getDom();
        } catch (e) {}
        return (e || this.removeListener(), e);
      }
      addThemeObserver() {
        this.removeListener();
        let e = this.divElement;
        return (
          e &&
            MutationObserver &&
            ((e = e.closest('[data-bs-theme]') || void 0),
            e &&
              ((this.observer = new MutationObserver(this.observeAttributeChange.bind(this))),
              this.observer.observe(e, { attributes: !0, childList: !1, subtree: !1 }))),
          e
        );
      }
      removeListener() {
        try {
          this.observer && this.observer.disconnect();
        } catch (e) {
        } finally {
          this.observer = void 0;
        }
      }
      observeAttributeChange(e, o) {
        try {
          this.divElement && e.find((e) => 'attributes' === e.type && 'data-bs-theme' === e.attributeName) && this.redraw();
        } catch (e) {
          this.removeListener();
        }
      }
    }
    function q(e, o, t = ['string'], s = '', r = []) {
      if (t.includes(typeof e) && o(e)) r.push(s);
      else if (d(e)) for (let n = 0; n < e.length; n++) q(e[n], o, t, s + '[' + n + ']', r);
      else if (h(e)) for (const n of Object.keys(e)) q(e[n], o, t, ('' === s ? '' : s + '.') + n, r);
      return r;
    }
    function M(e, o, t = '') {
      if (o.find((e) => e.startsWith(t))) {
        if (h(e)) {
          const s = {};
          for (const r of Object.keys(e)) s[r] = M(e[r], o, ('' === t ? '' : t + '.') + r);
          return s;
        }
        if (d(e)) {
          const s = [];
          for (let r = 0; r < e.length; r++) s[r] = M(e[r], o, t + '[' + r + ']');
          return s;
        }
      }
      return e;
    }
    function I(e, o, t = ['string']) {
      const s = q(e, o, t);
      return 0 < s.length ? M(e, s) : e;
    }
    const F =
        '\n.ods-charts-context, [data-bs-theme=light] .ods-charts-context, .ods-charts-context[data-bs-theme=light], [data-bs-theme] .ods-charts-context[data-bs-theme=light] {\n  --ouds-charts-color-border: #ffffff;\n  --ouds-charts-color-border-contrast: #ffffff;\n  --ouds-charts-color-categorical-tier-1: #5b2f98;\n  --ouds-charts-color-categorical-tier-10: #009bf0;\n  --ouds-charts-color-categorical-tier-2: #3ba06e;\n  --ouds-charts-color-categorical-tier-3: #b20077;\n  --ouds-charts-color-categorical-tier-4: #a38200;\n  --ouds-charts-color-categorical-tier-5: #007abd;\n  --ouds-charts-color-categorical-tier-6: #8d60cd;\n  --ouds-charts-color-categorical-tier-7: #2e7b54;\n  --ouds-charts-color-categorical-tier-8: #e50099;\n  --ouds-charts-color-categorical-tier-9: #665100;\n  --ouds-charts-color-functional-info: #009bf0;\n  --ouds-charts-color-functional-negative: #db0002;\n  --ouds-charts-color-functional-positive: #17a02f;\n  --ouds-charts-color-functional-warning: #a38200;\n  --ouds-charts-color-gridlines: #cccccc;\n  --ouds-charts-color-highlight: #f15e00;\n  --ouds-charts-color-neutral: #8f8f8f;\n  --ouds-charts-color-sequential-accent-1-tint-100: #d2ecf9;\n  --ouds-charts-color-sequential-accent-1-tint-200: #a5daf3;\n  --ouds-charts-color-sequential-accent-1-tint-300: #79c7ec;\n  --ouds-charts-color-sequential-accent-1-tint-400: #4ab4e6;\n  --ouds-charts-color-sequential-accent-1-tint-500: #1fa2e0;\n  --ouds-charts-color-sequential-accent-1-tint-600: #1982b3;\n  --ouds-charts-color-sequential-accent-1-tint-700: #136186;\n  --ouds-charts-color-sequential-accent-1-tint-800: #0c415a;\n  --ouds-charts-color-sequential-accent-1-tint-900: #06202d;\n  --ouds-charts-color-sequential-accent-2-tint-100: #e5f5ed;\n  --ouds-charts-color-sequential-accent-2-tint-200: #c0e8d4;\n  --ouds-charts-color-sequential-accent-2-tint-300: #9bdaba;\n  --ouds-charts-color-sequential-accent-2-tint-400: #75cca1;\n  --ouds-charts-color-sequential-accent-2-tint-500: #50be87;\n  --ouds-charts-color-sequential-accent-2-tint-600: #3ba06e;\n  --ouds-charts-color-sequential-accent-2-tint-700: #2e7b54;\n  --ouds-charts-color-sequential-accent-2-tint-800: #20563b;\n  --ouds-charts-color-sequential-accent-2-tint-900: #123021;\n  --ouds-charts-color-sequential-accent-3-tint-100: #ffe5f6;\n  --ouds-charts-color-sequential-accent-3-tint-200: #ffb4e6;\n  --ouds-charts-color-sequential-accent-3-tint-300: #ff80d4;\n  --ouds-charts-color-sequential-accent-3-tint-400: #ff4dc3;\n  --ouds-charts-color-sequential-accent-3-tint-500: #ff1ab2;\n  --ouds-charts-color-sequential-accent-3-tint-600: #e50099;\n  --ouds-charts-color-sequential-accent-3-tint-700: #b20077;\n  --ouds-charts-color-sequential-accent-3-tint-800: #800055;\n  --ouds-charts-color-sequential-accent-3-tint-900: #4d0033;\n  --ouds-charts-color-sequential-accent-4-tint-100: #f1ecf9;\n  --ouds-charts-color-sequential-accent-4-tint-200: #e0d4f2;\n  --ouds-charts-color-sequential-accent-4-tint-300: #c5ade6;\n  --ouds-charts-color-sequential-accent-4-tint-400: #a885d8;\n  --ouds-charts-color-sequential-accent-4-tint-500: #8d60cd;\n  --ouds-charts-color-sequential-accent-4-tint-600: #5b2f98;\n  --ouds-charts-color-sequential-accent-4-tint-700: #432371;\n  --ouds-charts-color-sequential-accent-4-tint-800: #2c174a;\n  --ouds-charts-color-sequential-accent-4-tint-900: #150b23;\n  --ouds-charts-color-sequential-accent-5-tint-100: #fff0cc;\n  --ouds-charts-color-sequential-accent-5-tint-200: #ffe199;\n  --ouds-charts-color-sequential-accent-5-tint-300: #ffd266;\n  --ouds-charts-color-sequential-accent-5-tint-400: #ffc333;\n  --ouds-charts-color-sequential-accent-5-tint-500: #ffb400;\n  --ouds-charts-color-sequential-accent-5-tint-600: #cc9000;\n  --ouds-charts-color-sequential-accent-5-tint-700: #996c00;\n  --ouds-charts-color-sequential-accent-5-tint-800: #664800;\n  --ouds-charts-color-sequential-accent-5-tint-900: #332400;\n}\n\n[data-bs-theme=dark] .ods-charts-context, .ods-charts-context[data-bs-theme=dark], [data-bs-theme] .ods-charts-context[data-bs-theme=dark] {\n  --ouds-charts-color-border: #141414;\n  --ouds-charts-color-border-contrast: #000000;\n  --ouds-charts-color-categorical-tier-1: #a885d8;\n  --ouds-charts-color-categorical-tier-10: #1fa2e0;\n  --ouds-charts-color-categorical-tier-2: #50be87;\n  --ouds-charts-color-categorical-tier-3: #ff80d4;\n  --ouds-charts-color-categorical-tier-4: #d6aa00;\n  --ouds-charts-color-categorical-tier-5: #79c7ec;\n  --ouds-charts-color-categorical-tier-6: #8d60cd;\n  --ouds-charts-color-categorical-tier-7: #9bdaba;\n  --ouds-charts-color-categorical-tier-8: #ff4dc3;\n  --ouds-charts-color-categorical-tier-9: #ffd266;\n  --ouds-charts-color-functional-info: #26b2ff;\n  --ouds-charts-color-functional-negative: #ff4d4e;\n  --ouds-charts-color-functional-positive: #1ecd3c;\n  --ouds-charts-color-functional-warning: #ffd000;\n  --ouds-charts-color-gridlines: #666666;\n  --ouds-charts-color-highlight: #ff7900;\n  --ouds-charts-color-neutral: #858585;\n  --ouds-charts-color-sequential-accent-1-tint-100: #06202d;\n  --ouds-charts-color-sequential-accent-1-tint-200: #0c415a;\n  --ouds-charts-color-sequential-accent-1-tint-300: #136186;\n  --ouds-charts-color-sequential-accent-1-tint-400: #1982b3;\n  --ouds-charts-color-sequential-accent-1-tint-500: #1fa2e0;\n  --ouds-charts-color-sequential-accent-1-tint-600: #4ab4e6;\n  --ouds-charts-color-sequential-accent-1-tint-700: #79c7ec;\n  --ouds-charts-color-sequential-accent-1-tint-800: #a5daf3;\n  --ouds-charts-color-sequential-accent-1-tint-900: #d2ecf9;\n  --ouds-charts-color-sequential-accent-2-tint-100: #123021;\n  --ouds-charts-color-sequential-accent-2-tint-200: #20563b;\n  --ouds-charts-color-sequential-accent-2-tint-300: #2e7b54;\n  --ouds-charts-color-sequential-accent-2-tint-400: #3ba06e;\n  --ouds-charts-color-sequential-accent-2-tint-500: #50be87;\n  --ouds-charts-color-sequential-accent-2-tint-600: #75cca1;\n  --ouds-charts-color-sequential-accent-2-tint-700: #9bdaba;\n  --ouds-charts-color-sequential-accent-2-tint-800: #c0e8d4;\n  --ouds-charts-color-sequential-accent-2-tint-900: #e5f5ed;\n  --ouds-charts-color-sequential-accent-3-tint-100: #4d0033;\n  --ouds-charts-color-sequential-accent-3-tint-200: #800055;\n  --ouds-charts-color-sequential-accent-3-tint-300: #b20077;\n  --ouds-charts-color-sequential-accent-3-tint-400: #e50099;\n  --ouds-charts-color-sequential-accent-3-tint-500: #ff1ab2;\n  --ouds-charts-color-sequential-accent-3-tint-600: #ff4dc3;\n  --ouds-charts-color-sequential-accent-3-tint-700: #ff80d4;\n  --ouds-charts-color-sequential-accent-3-tint-800: #ffb4e6;\n  --ouds-charts-color-sequential-accent-3-tint-900: #ffe5f6;\n  --ouds-charts-color-sequential-accent-4-tint-100: #150b23;\n  --ouds-charts-color-sequential-accent-4-tint-200: #2c174a;\n  --ouds-charts-color-sequential-accent-4-tint-300: #432371;\n  --ouds-charts-color-sequential-accent-4-tint-400: #5b2f98;\n  --ouds-charts-color-sequential-accent-4-tint-500: #8d60cd;\n  --ouds-charts-color-sequential-accent-4-tint-600: #a885d8;\n  --ouds-charts-color-sequential-accent-4-tint-700: #c5ade6;\n  --ouds-charts-color-sequential-accent-4-tint-800: #e0d4f2;\n  --ouds-charts-color-sequential-accent-4-tint-900: #f1ecf9;\n  --ouds-charts-color-sequential-accent-5-tint-100: #332400;\n  --ouds-charts-color-sequential-accent-5-tint-200: #664800;\n  --ouds-charts-color-sequential-accent-5-tint-300: #996c00;\n  --ouds-charts-color-sequential-accent-5-tint-400: #cc9000;\n  --ouds-charts-color-sequential-accent-5-tint-500: #ffb400;\n  --ouds-charts-color-sequential-accent-5-tint-600: #ffc333;\n  --ouds-charts-color-sequential-accent-5-tint-700: #ffd266;\n  --ouds-charts-color-sequential-accent-5-tint-800: #ffe199;\n  --ouds-charts-color-sequential-accent-5-tint-900: #fff0cc;\n}',
      N =
        '\n.ods-charts-context, [data-bs-theme="light"] .ods-charts-context, .ods-charts-context[data-bs-theme="light"], [data-bs-theme] .ods-charts-context[data-bs-theme="light"]  {\n  color-scheme: light;\n  --bs-blue: #4170d8;\n  --bs-indigo: #a885d8;\n  --bs-purple: #a885d8;\n  --bs-pink: #ffb4e6;\n  --bs-red: #cd3c14;\n  --bs-orange: #f16e00;\n  --bs-yellow: #fc0;\n  --bs-green: #228722;\n  --bs-teal: #50be87;\n  --bs-cyan: #4bb4e6;\n  --bs-black: #000;\n  --bs-white: #fff;\n  --bs-gray: #999;\n  --bs-gray-dark: #595959;\n  --bs-gray-100: #fafafa;\n  --bs-gray-200: #f6f6f6;\n  --bs-gray-300: #eee;\n  --bs-gray-400: #ddd;\n  --bs-gray-500: #ccc;\n  --bs-gray-600: #999;\n  --bs-gray-700: #666;\n  --bs-gray-800: #595959;\n  --bs-gray-900: #333;\n  --bs-gray-950: #141414;\n  --bs-body-color: #000;\n  --bs-body-color-rgb: 0, 0, 0;\n  --bs-body-bg: #fff;\n  --bs-body-bg-rgb: 255, 255, 255;\n  --bs-link-color: #000;\n  --bs-border-width: 0.125rem;\n  --bs-border-color: #000;\n  --bs-border-color-subtle: #ccc;\n\n  --bs-secondary-color: #666;\n  --bs-secondary-bg: #eee;\n  --bs-primary: #f16e00;\n  --bs-secondary: #000;\n  --bs-success: #228722;\n  --bs-info: #4170d8;\n  --bs-warning: #fc0;\n  --bs-danger: #cd3c14;\n  --bs-light: #ccc;\n  --bs-dark: #000;\n\n  --bs-warning-rgb: 255, 204, 0;\n  --bs-tertiary-color-rgb: 204, 204, 204;\n  --bs-tertiary-bg: #fafafa;\n}\n\n[data-bs-theme="dark"] .ods-charts-context, .ods-charts-context[data-bs-theme="dark"], [data-bs-theme] .ods-charts-context[data-bs-theme="dark"] {\n  color-scheme: dark;\n  --bs-body-color: #fff;\n  --bs-body-color-rgb: 255, 255, 255;\n  --bs-body-bg: #141414;\n  --bs-body-bg-rgb: 20, 20, 20;\n  --bs-link-color: #fff;\n  --bs-border-color: #fff;\n  --bs-border-color-subtle: #666;\n\n  --bs-secondary-color: #999;\n  --bs-secondary-bg: #333;\n  --bs-primary: #ff7900;\n  --bs-secondary: #fff;\n  --bs-success: #6c6;\n  --bs-info: #69f;\n  --bs-warning: #fc0;\n  --bs-danger: #f66;\n  --bs-light: #ccc;\n  --bs-dark: #000;\n\n  --bs-warning-rgb: 255, 204, 0;\n  --bs-tertiary-color-rgb: 102, 102, 102;\n  --bs-tertiary-bg: #000;\n}\n\n\n[data-bs-theme] .ods-charts-context, .ods-charts-context[data-bs-theme] {\n    color: var(--bs-body-color);\n    background-color: var(--bs-body-bg);\n}\n\n\n[data-bs-theme] .ods-charts-context a, .ods-charts-context[data-bs-theme] a {\n    color: var(--bs-link-color);\n}\n    \n.ods-charts-context {\n  --bs-body-font-weight: 400;\n}\n',
      $ =
        '\n.ods-charts-context {\n  --bs-font-sans-serif:  "Helvetica Neue", Helvetica, "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n}\n',
      _ = `\n.ods-charts-context, [data-bs-theme="light"] .ods-charts-context, .ods-charts-context[data-bs-theme="light"], [data-bs-theme] .ods-charts-context[data-bs-theme="light"]  {\n  color-scheme: light;\n\n  --ods-yellow-100: #fff6b6;\n  --ods-yellow-200: #ffe45b;\n  --ods-yellow-300: #ffd200;\n  --ods-yellow-400: #ffb400;\n  --ods-yellow-500: #b98f11;\n  --ods-yellow-600: #9d6e06;\n\n  --ods-yellow: var(--ods-yellow-300);\n\n  --ods-blue-100: #b5e8f7;\n  --ods-blue-200: #80ceef;\n  --ods-blue-300: #4bb4e6;\n  --ods-blue-400: #3e9dd6;\n  --ods-blue-500: #237ecA;\n  --ods-blue-600: #085ebd;\n\n  --ods-green-100: #B8EBD6;\n  --ods-green-200: #84D5AF;\n  --ods-green-300: #50BE87;\n  --ods-green-400: #27A971;\n  --ods-green-500: #198C51;\n  --ods-green-600: #0A6E31;\n\n  --ods-pink-100: #FFE8F7;\n  --ods-pink-200: #FFCEEF;\n  --ods-pink-300: #FFB4E6;\n  --ods-pink-400: #FF8AD4;\n  --ods-pink-500: #D573BB;\n  --ods-pink-600: #BC4D9A;\n\n  --ods-purple-100: #D9C2F0;\n  --ods-purple-200: #C1A4E4;\n  --ods-purple-300: #A885D8;\n  --ods-purple-400: #9373BD;\n  --ods-purple-500: #6E4AA7;\n  --ods-purple-600: #492191;\n\n  --ods-yellow-1: var(--ods-yellow-600);\n  --ods-yellow-2: var(--ods-yellow-500);\n  --ods-yellow-3: var(--ods-yellow-400);\n  --ods-yellow-4: var(--ods-yellow-300);\n  --ods-yellow-5: var(--ods-yellow-200);\n  --ods-yellow-6: var(--ods-yellow-100);\n\n  --ods-blue-1: var(--ods-blue-600);\n  --ods-blue-2: var(--ods-blue-500);\n  --ods-blue-3: var(--ods-blue-400);\n  --ods-blue-4: var(--ods-blue-300);\n  --ods-blue-5: var(--ods-blue-200);\n  --ods-blue-6: var(--ods-blue-100);\n\n  --ods-green-1: var(--ods-green-600);\n  --ods-green-2: var(--ods-green-500);\n  --ods-green-3: var(--ods-green-400);\n  --ods-green-4: var(--ods-green-300);\n  --ods-green-5: var(--ods-green-200);\n  --ods-green-6: var(--ods-green-100);\n\n  --ods-pink-1: var(--ods-pink-600);\n  --ods-pink-2: var(--ods-pink-500);\n  --ods-pink-3: var(--ods-pink-400);\n  --ods-pink-4: var(--ods-pink-300);\n  --ods-pink-5: var(--ods-pink-200);\n  --ods-pink-6: var(--ods-pink-100);\n\n  --ods-purple-1: var(--ods-purple-600);\n  --ods-purple-2: var(--ods-purple-500);\n  --ods-purple-3: var(--ods-purple-400);\n  --ods-purple-4: var(--ods-purple-300);\n  --ods-purple-5: var(--ods-purple-200);\n  --ods-purple-6: var(--ods-purple-100);\n\n  --ods-categorical-1: var(--ods-blue-600);\n  --ods-categorical-2: var(--ods-green-400);\n  --ods-categorical-3: var(--ods-pink-600);\n  --ods-categorical-4: var(--ods-purple-400);\n  --ods-categorical-5: var(--ods-yellow-600);\n  --ods-categorical-6: var(--bs-gray-900);\n  --ods-categorical-7: var(--ods-blue-400);\n  --ods-categorical-8: var(--ods-green-600);\n  --ods-categorical-9: var(--ods-pink-500);\n  --ods-categorical-10: var(--ods-purple-600);\n  --ods-categorical-11: var(--ods-yellow-500);\n  --ods-categorical-12: var(--bs-gray-700);\n\n  --ods-default-1: var(--ods-blue-600);\n  --ods-default-2: var(--ods-green-600);\n  --ods-default-3: var(--ods-pink-600);\n  --ods-default-4: var(--ods-purple-600);\n  --ods-default-5: var(--ods-yellow-500);\n  --ods-default-6: var(--bs-gray-700);\n  --ods-default-7: var(--ods-blue-400);\n  --ods-default-8: var(--ods-green-400);\n  --ods-default-9: var(--ods-pink-500);\n  --ods-default-10: var(--ods-purple-400);\n  --ods-default-11: var(--ods-yellow-600);\n  --ods-default-12: var(--bs-gray-900);\n\n  --ods-cyan-light: var(--ods-blue-100);\n  --ods-teal-light: var(--ods-green-100);\n  --ods-pink-light: var(--ods-pink-100);\n  --ods-indigo-light: var(--ods-purple-100);\n  --ods-yellow-light: var(--ods-yellow-100);\n\n  --ods-cyan-dark: var(--ods-blue-600);\n  --ods-teal-dark: var(--ods-green-600);\n  --ods-pink-dark: var(--ods-pink-400);\n  --ods-indigo-dark: var(--ods-purple-600);\n  --ods-yellow-dark: var(--ods-yellow-400);\n\n  --ods-functional-1: var(--bs-primary);\n  --ods-functional-2: var(--bs-gray-300);\n  --ods-functional-3: var(--bs-success);\n  --ods-functional-4: var(--bs-warning);\n  --ods-functional-5: var(--bs-danger);\n  --ods-functional-6: var(--bs-info);\n\n  --ods-dial-gauge-pointer: image://data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22147%2065.2635%2023%20104.4226%22%20width%3D%2223px%22%20height%3D%22107.735px%22%3E%0A%20%20%3Cpath%20d%3D%22M%20123.034%2079.908%20L%20179.603%20150.618%20L%20193.745%20136.476%20L%20123.034%2079.908%20Z%22%20fill%3D%22%23000%22%20style%3D%22stroke-width%3A%201%3B%20transform-origin%3A%20158.389px%20115.263px%3B%22%20transform%3D%22matrix(0.70710701%2C%200.70710701%2C%20-0.70710701%2C%200.70710701%2C%200.00000871%2C%20-0.0000095)%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%22131.469%22%20cy%3D%2290.553%22%20r%3D%2210%22%20fill%3D%22%23000%22%20style%3D%22stroke-width%3A%201%3B%20transform-origin%3A%20131.469px%2090.553px%3B%22%20transform%3D%22matrix(-0.70710701%2C%20-0.70710701%2C%200.70710701%2C%20-0.70710701%2C%2026.91516753%2C%2064.99089065)%22%2F%3E%0A%3C%2Fsvg%3E\n}\n\n[data-bs-theme="dark"] .ods-charts-context, .ods-charts-context[data-bs-theme="dark"], [data-bs-theme] .ods-charts-context[data-bs-theme="dark"] {\n  color-scheme: dark;\n\n  --ods-yellow-1: var(--ods-yellow-100);\n  --ods-yellow-2: var(--ods-yellow-200);\n  --ods-yellow-3: var(--ods-yellow-300);\n  --ods-yellow-4: var(--ods-yellow-400);\n  --ods-yellow-5: var(--ods-yellow-500);\n  --ods-yellow-6: var(--ods-yellow-600);\n\n  --ods-blue-1: var(--ods-blue-100);\n  --ods-blue-2: var(--ods-blue-200);\n  --ods-blue-3: var(--ods-blue-300);\n  --ods-blue-4: var(--ods-blue-400);\n  --ods-blue-5: var(--ods-blue-500);\n  --ods-blue-6: var(--ods-blue-600);\n\n  --ods-green-1: var(--ods-green-100);\n  --ods-green-2: var(--ods-green-200);\n  --ods-green-3: var(--ods-green-300);\n  --ods-green-4: var(--ods-green-400);\n  --ods-green-5: var(--ods-green-500);\n  --ods-green-6: var(--ods-green-600);\n\n  --ods-pink-1: var(--ods-pink-100);\n  --ods-pink-2: var(--ods-pink-200);\n  --ods-pink-3: var(--ods-pink-300);\n  --ods-pink-4: var(--ods-pink-400);\n  --ods-pink-5: var(--ods-pink-500);\n  --ods-pink-6: var(--ods-pink-600);\n\n  --ods-purple-1: var(--ods-purple-100);\n  --ods-purple-2: var(--ods-purple-200);\n  --ods-purple-3: var(--ods-purple-300);\n  --ods-purple-4: var(--ods-purple-400);\n  --ods-purple-5: var(--ods-purple-500);\n  --ods-purple-6: var(--ods-purple-600);\n\n  --ods-categorical-1: var(--ods-blue-500);\n  --ods-categorical-2: var(--ods-green-300);\n  --ods-categorical-3: var(--ods-pink-400);\n  --ods-categorical-4: var(--ods-purple-300);\n  --ods-categorical-5: var(--ods-yellow-400);\n  --ods-categorical-6: var(--bs-gray-600);\n  --ods-categorical-7: var(--ods-blue-300);\n  --ods-categorical-8: var(--ods-green-500);\n  --ods-categorical-9: var(--ods-pink-300);\n  --ods-categorical-10: var(--ods-purple-500);\n  --ods-categorical-11: var(--ods-yellow-300);\n  --ods-categorical-12: var(--bs-gray-500);\n\n  --ods-default-1: var(--ods-blue-500);\n  --ods-default-2: var(--ods-green-500);\n  --ods-default-3: var(--ods-pink-400);\n  --ods-default-4: var(--ods-purple-500);\n  --ods-default-5: var(--ods-yellow-300);\n  --ods-default-6: var(--bs-gray-500);\n  --ods-default-7: var(--ods-blue-300);\n  --ods-default-8: var(--ods-green-300);\n  --ods-default-9: var(--ods-pink-300);\n  --ods-default-10: var(--ods-purple-300);\n  --ods-default-11: var(--ods-yellow-400);\n  --ods-default-12: var(--bs-gray-600);\n\n  --ods-cyan-light: var(--ods-blue-600);\n  --ods-teal-light: var(--ods-green-600);\n  --ods-pink-light: var(--ods-pink-400);\n  --ods-indigo-light: var(--ods-purple-600);\n  --ods-yellow-light: var(--ods-yellow-400);\n\n  --ods-cyan-dark: var(--ods-blue-100);\n  --ods-teal-dark: var(--ods-green-100);\n  --ods-pink-dark: var(--ods-pink-100);\n  --ods-indigo-dark: var(--ods-purple-100);\n  --ods-yellow-dark: var(--ods-yellow-100);\n\n  --ods-functional-1: var(--bs-primary);\n  --ods-functional-2: var(--bs-gray-700);\n  --ods-functional-3: var(--bs-success);\n  --ods-functional-4: var(--bs-warning);\n  --ods-functional-5: var(--bs-danger);\n  --ods-functional-6: var(--bs-info);\n\n  --ods-dial-gauge-pointer: image://data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22147%2065.2635%2023%20104.4226%22%20width%3D%2223px%22%20height%3D%22107.735px%22%3E%0A%20%20%3Cpath%20d%3D%22M%20123.034%2079.908%20L%20179.603%20150.618%20L%20193.745%20136.476%20L%20123.034%2079.908%20Z%22%20fill%3D%22%23fff%22%20style%3D%22stroke-width%3A%201%3B%20transform-origin%3A%20158.389px%20115.263px%3B%22%20transform%3D%22matrix(0.70710701%2C%200.70710701%2C%20-0.70710701%2C%200.70710701%2C%200.00000871%2C%20-0.0000095)%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%22131.469%22%20cy%3D%2290.553%22%20r%3D%2210%22%20fill%3D%22%23fff%22%20style%3D%22stroke-width%3A%201%3B%20transform-origin%3A%20131.469px%2090.553px%3B%22%20transform%3D%22matrix(-0.70710701%2C%20-0.70710701%2C%200.70710701%2C%20-0.70710701%2C%2026.91516753%2C%2064.99089065)%22%2F%3E%0A%3C%2Fsvg%3E\n\n}\n\n.ods-charts-context {\n  --ods-popover-header-padding-y: initial;\n  --ods-popover-header-padding-top: 5px;\n  --ods-popover-header-padding-x: 9px;\n  --ods-popover-header-padding-bottom: 7px;\n  --ods-popover-body-padding-x: 9px;\n  --ods-popover-body-padding-y: initial;\n  --ods-popover-body-padding-top: 0;\n  --ods-popover-body-padding-bottom: 7px;\n  \n  --ods-popover-header-font-size: 14px;\n  --ods-popover-header-line-height: 1.11;\n  --ods-popover-header-font-weight: 700;\n\n  --ods-popover-body-font-size: 14px;\n  --ods-popover-body-line-height: 1.1;\n  --ods-popover-body-font-weight: 400;\n\n  --ods-poppover-arrow-display: ${0 == y ? 'none' : 'inherit'};\n}\n`,
      B = {
        BOOSTED4: `\n  ${F}\n  ${_}\n  ${N}\n  \n.ods-charts-context {\n  --bs-font-sans-serif:  var(--font-family-sans-serif, "Helvetica Neue");\n}\n\n.ods-charts-context .popover {\n  color: var(--bs-body-color);\n  background-color: var(--bs-body-bg);\n  border: 2px solid var(--bs-border-color-subtle);\n}\n\n.ods-charts-context .popover .popover-header {\n  color: var(--bs-body-color);\n  background-color: var(--bs-body-bg);\n  padding-left: var(--ods-popover-header-padding-x, 9px);\n  padding-right: var(--ods-popover-header-padding-x, 9px);\n  padding-top: var(--ods-popover-header-padding-top, 5px);\n  padding-bottom: var(--ods-popover-header-padding-bottom, 7px);\n  font-size: var(--ods-popover-header-font-size, 14px);\n  line-height: var(--ods-popover-header-line-height, 1.11);\n  border:none;\n}\n\n.ods-charts-context .popover .popover-body {\n  color: var(--bs-body-color);\n  padding-left: var(--ods-popover-body-padding-x, 9px);\n  padding-right: var(--ods-popover-body-padding-x, 9px);\n  padding-top: var(--ods-popover-body-padding-top, 0);\n  padding-bottom: var(--ods-popover-body-padding-bottom, 7px);\n}\n\n.ods-charts-context .popover .arrow {\n  display: var(--ods-poppover-arrow-display, ${0 == y ? 'none' : 'inherit'});\n}\n\n.ods-charts-context .popover-header::before {\n    visibility: hidden;\n}\n\n.ods-charts-context .bs-popover-auto[x-placement^=bottom]>.arrow::after, \n.ods-charts-context .bs-popover-bottom>.arrow::after {\n    border-bottom-color: var(--bs-body-bg);\n}\n\n.ods-charts-context .bs-popover-auto[x-placement^=top]>.arrow::after, \n.ods-charts-context .bs-popover-top>.arrow::after {\n    border-top-color: var(--bs-body-bg);\n}\n\n.ods-charts-context .bs-popover-auto[x-placement^=left]>.arrow::after, \n.ods-charts-context .bs-popover-left >.arrow::after {\n    border-left-color: var(--bs-body-bg);\n}\n    \n.ods-charts-context .bs-popover-auto[x-placement^=right]>.arrow::after,\n.ods-charts-context .bs-popover-right >.arrow::after {\n    border-right-color: var(--bs-body-bg);\n}\n\n  `,
        BOOSTED5: `\n  ${F}\n  ${_}\n  \n.ods-charts-context .popover {\n  --bs-popover-header-padding-y: var(--ods-popover-header-padding-y, initial);\n  --bs-popover-header-padding-top: var(--ods-popover-header-padding-top, 5px);\n  --bs-popover-header-padding-x: var(--ods-popover-header-padding-x, 9px);\n  --bs-popover-header-padding-bottom: var(--ods-popover-header-padding-bottom, 7px);\n  --bs-popover-body-padding-x: var(--ods-popover-body-padding-x, 9px);\n  --bs-popover-body-padding-y: var(--ods-popover-body-padding-y, initial);\n  --bs-popover-body-padding-top: var(--ods-popover-body-padding-top, 0);\n  --bs-popover-body-padding-bottom: var(--ods-popover-body-padding-bottom, 7px);\n\n  --bs-popover-header-font-size: var(--ods-popover-header-font-size, 14px);\n  --bs-popover-header-line-height: var(--ods-popover-header-line-height, 1.11);\n}\n.ods-charts-context .popover .popover-arrow {\n  display: var(--ods-poppover-arrow-display, ${0 == y ? 'none' : 'inherit'});\n}  \n\n  `,
        CUSTOM: `\n  ${F}\n  ${_}\n  ${N}\n  ${$}\n  `,
        NONE: `\n  ${F}\n  ${_}\n  ${N}\n  ${$}\n  `,
      };
    class H {
      constructor(e, o, t) {
        ((this.cssSelector = e),
          (this.mode = o),
          (this.cssThemeName = t),
          (this._computedStyle = void 0),
          (this._computedStyleInitialized = !1),
          (this.cssVarsMapping = {}));
      }
      get computedStyle() {
        if (void 0 === this._computedStyle) {
          if (this.cssSelector) {
            let e = document.querySelector(this.cssSelector + '>.ods-charts-style-' + (this.mode ? this.mode : ce.DEFAULT));
            if (!e) {
              const o = this.cssSelector ? document.querySelector(this.cssSelector) : null;
              o &&
                ((e = document.createElement('div')),
                this.mode && this.mode !== ce.DEFAULT && e.setAttribute('data-bs-theme', this.mode),
                e.classList.add('ods-charts-context'),
                e.classList.add('ods-charts-style-' + (this.mode ? this.mode : ce.DEFAULT)),
                o.append(e));
            }
            e && (this._computedStyle = window.getComputedStyle(e));
          }
          ((this._computedStyle = this._computedStyle ? this._computedStyle : null),
            this._computedStyle || console.error('unable to build computed style for chart css context', this.cssSelector, this.cssSelector));
        }
        return this._computedStyle ? this._computedStyle : void 0;
      }
      initComputedStyle() {
        var e;
        if (!this._computedStyleInitialized) {
          if (!document.getElementById('ods-charts-style-' + this.cssThemeName) && B[this.cssThemeName]) {
            document.querySelectorAll('style[data-ods-charts-type="theme"]').forEach((e) => e.remove());
            const o = document.createElement('style');
            ((o.textContent = B[this.cssThemeName]),
              (o.id = 'ods-charts-style-' + this.cssThemeName),
              o.setAttribute('data-ods-charts-type', 'theme'),
              null === (e = document.querySelector('head')) || void 0 === e || e.append(o));
          }
          return ((this._computedStyleInitialized = !0), !0);
        }
        return !1;
      }
      removeComputedStyle() {
        if (this.cssSelector) {
          const e = document.querySelector(this.cssSelector + '>.ods-charts-style-' + (this.mode ? this.mode : ce.DEFAULT));
          e && e.remove();
        }
        ((this._computedStyle = void 0), (this._computedStyleInitialized = !1));
      }
      getPropertyValue(e) {
        return (this.computedStyle ? this.computedStyle.getPropertyValue(e) : '') || '';
      }
      replaceOneCssVar(e) {
        let o = e;
        if (this.cssSelector && 'string' == typeof o && this.computedStyle)
          try {
            const e = this.getCssVarMatch(o);
            if (e)
              for (const t of e) {
                if (!(t in this.cssVarsMapping)) {
                  const e = /var\( ?([^, ]+) ?, ?([^\)]+) ?\)/,
                    o = t.match(e);
                  if (o) {
                    const e = this.getPropertyValue(o[1]);
                    (e || console.error('missing css var ', t), (this.cssVarsMapping[t] = e || o[2]));
                  } else {
                    const e = /var\( ?(.+) ?\)/,
                      o = t.match(e);
                    if (o) {
                      const e = this.getPropertyValue(o[1]);
                      e ? (this.cssVarsMapping[t] = e) : (console.error('missing css var ', t), (this.cssVarsMapping[t] = t));
                    } else (console.error('missing css var ', t), (this.cssVarsMapping[t] = t));
                  }
                }
                t in this.cssVarsMapping && (o = o.replace(t, this.cssVarsMapping[t]));
              }
          } catch (e) {}
        return o;
      }
      replaceRecursivelyCssVars(e) {
        var o = e;
        for (const e of Object.keys(o))
          if (d(o[e]))
            for (let t = 0; t < o[e].length; t++)
              h(o[e][t]) || d(o[e][t])
                ? (o[e][t] = this.replaceRecursivelyCssVars(o[e][t]))
                : 'string' == typeof o[e][t] && (o[e][t] = this.replaceOneCssVar(o[e][t]));
          else h(o[e]) ? (o[e] = this.replaceRecursivelyCssVars(o[e])) : 'string' == typeof o[e] && (o[e] = this.replaceOneCssVar(o[e]));
        return o;
      }
      getCssVarMatch(e) {
        return e.match(/var\(([^,]*),?(.*)\)/g);
      }
      changeThemeMode(e) {
        ((this.cssVarsMapping = {}), (this.mode = e));
      }
      replaceAllCssVars(e) {
        let o = e;
        const t = this.initComputedStyle();
        try {
          this.computedStyle && (o = this.replaceRecursivelyCssVars(e));
        } finally {
          t && this.removeComputedStyle();
        }
        return o;
      }
      cloneAndReplaceAllCssVars(e) {
        const o = this.initComputedStyle();
        try {
          return this.replaceAllCssVars(I(e, (e) => !!this.getCssVarMatch(e)));
        } finally {
          o && this.removeComputedStyle();
        }
      }
    }
    const U = {
        color: [
          'var(--ods-yellow-1, #9D6E06)',
          'var(--ods-yellow-2, #B98F11)',
          'var(--ods-yellow-3, #FFB400)',
          'var(--ods-yellow-4, #FFD200)',
          'var(--ods-yellow-5, #FFE45B)',
          'var(--ods-yellow-6, #FFF6B6)',
        ],
      },
      z = {
        color: [
          'var(--ods-purple-1, #492191)',
          'var(--ods-purple-2, #6E4AA7)',
          'var(--ods-purple-3, #9373BD)',
          'var(--ods-purple-4, #A885D8)',
          'var(--ods-purple-5, #C1A4E4)',
          'var(--ods-purple-6, #D9C2F0)',
        ],
      },
      V = {
        color: [
          'var(--ods-pink-1, #BC4D9A)',
          'var(--ods-pink-2, #D573BB)',
          'var(--ods-pink-3, #FF8AD4)',
          'var(--ods-pink-4, #FFB4E6)',
          'var(--ods-pink-5, #FFCEEF)',
          'var(--ods-pink-6, #FFE8F7)',
        ],
      },
      R = {
        color: [
          'var(--ods-green-1, #0A6E31)',
          'var(--ods-green-2, #27A971)',
          'var(--ods-green-3, #84D5AF)',
          'var(--ods-green-4, #198C51)',
          'var(--ods-green-5, #50BE87)',
          'var(--ods-green-6, #B8EBD6)',
        ],
      },
      G = {
        color: [
          'var(--ods-blue-1, #085EBD)',
          'var(--ods-blue-2, #237ECA)',
          'var(--ods-blue-3, #3E9DD6)',
          'var(--ods-blue-4, #4BB4E6)',
          'var(--ods-blue-5, #80CEEF)',
          'var(--ods-blue-6, #B5E8F7)',
        ],
      },
      j = {
        color: [
          'var(--ods-cyan-light, #B5E8F7)',
          'var(--ods-teal-light, #B8EBD6)',
          'var(--ods-pink-light, #FFE8F7)',
          'var(--ods-indigo-light, #D9C2F0)',
          'var(--ods-yellow-light, #FFF6B6)',
        ],
      },
      W = {
        color: [
          'var(--ods-cyan-dark, #085EBD)',
          'var(--ods-teal-dark, #0A6E31)',
          'var(--ods-pink-dark, #FF8AD4)',
          'var(--ods-indigo-dark, #492191)',
          'var(--ods-yellow-dark, #FFB400)',
        ],
      },
      Q = {
        color: ['var(--bs-cyan, #4bb4e6)', 'var(--bs-teal, #50be87)', 'var(--bs-pink, #ffb4e6)', 'var(--bs-indigo, #a885d8)', 'var(--ods-yellow, #ffd200)'],
      },
      K = {
        color: [
          'var(--ods-functional-1, #F16E00)',
          'var(--ods-functional-2, #EEEEEE)',
          'var(--ods-functional-3, #228722)',
          'var(--ods-functional-4, #FFCC00)',
          'var(--ods-functional-5, #CD3C14)',
          'var(--ods-functional-6, #4170D8)',
        ],
      },
      Y = {
        color: [
          'var(--ods-categorical-1, #085ebd)',
          'var(--ods-categorical-2, #27a971)',
          'var(--ods-categorical-3, #bc4d9a)',
          'var(--ods-categorical-4, #9373bd)',
          'var(--ods-categorical-5, #9d6e06)',
          'var(--ods-categorical-6, #333333)',
          'var(--ods-categorical-7, #3e9dd6)',
          'var(--ods-categorical-8, #0a6e31)',
          'var(--ods-categorical-9, #d573bb)',
          'var(--ods-categorical-10, #492191)',
          'var(--ods-categorical-11, #b98f11)',
          'var(--ods-categorical-12, #666666)',
        ],
      },
      Z = {
        color: [
          'var(--ods-default-1, #085edb)',
          'var(--ods-default-2, #0a6e31)',
          'var(--ods-default-3, #bc4d9a)',
          'var(--ods-default-4, #492191)',
          'var(--ods-default-5, #b98f11)',
          'var(--ods-default-6, #666666)',
          'var(--ods-default-7, #3e9dd6)',
          'var(--ods-default-8, #27a971)',
          'var(--ods-default-9, #d573bb)',
          'var(--ods-default-10, #9373bd)',
          'var(--ods-default-11, #9d6e06)',
          'var(--ods-default-12, #333333)',
        ],
      },
      J = {
        color: [
          'var(--ouds-charts-color-sequential-accent-1-tint-100)',
          'var(--ouds-charts-color-sequential-accent-1-tint-200)',
          'var(--ouds-charts-color-sequential-accent-1-tint-300)',
          'var(--ouds-charts-color-sequential-accent-1-tint-400)',
          'var(--ouds-charts-color-sequential-accent-1-tint-500)',
          'var(--ouds-charts-color-sequential-accent-1-tint-600)',
          'var(--ouds-charts-color-sequential-accent-1-tint-700)',
          'var(--ouds-charts-color-sequential-accent-1-tint-800)',
          'var(--ouds-charts-color-sequential-accent-1-tint-900)',
        ],
      },
      X = {
        color: [
          'var(--ouds-charts-color-categorical-tier-1)',
          'var(--ouds-charts-color-categorical-tier-2)',
          'var(--ouds-charts-color-categorical-tier-3)',
          'var(--ouds-charts-color-categorical-tier-4)',
          'var(--ouds-charts-color-categorical-tier-5)',
          'var(--ouds-charts-color-categorical-tier-6)',
          'var(--ouds-charts-color-categorical-tier-7)',
          'var(--ouds-charts-color-categorical-tier-8)',
          'var(--ouds-charts-color-categorical-tier-9)',
          'var(--ouds-charts-color-categorical-tier-10)',
        ],
      },
      ee = {
        color: ['var(--ouds-charts-color-functional-positive)', 'var(--ouds-charts-color-functional-warning)', 'var(--ouds-charts-color-functional-negative)'],
      },
      oe = {
        color: [
          'var(--ouds-charts-color-sequential-accent-2-tint-100)',
          'var(--ouds-charts-color-sequential-accent-2-tint-200)',
          'var(--ouds-charts-color-sequential-accent-2-tint-300)',
          'var(--ouds-charts-color-sequential-accent-2-tint-400)',
          'var(--ouds-charts-color-sequential-accent-2-tint-500)',
          'var(--ouds-charts-color-sequential-accent-2-tint-600)',
          'var(--ouds-charts-color-sequential-accent-2-tint-700)',
          'var(--ouds-charts-color-sequential-accent-2-tint-800)',
          'var(--ouds-charts-color-sequential-accent-2-tint-900)',
        ],
      },
      te = { color: ['var(--ouds-charts-color-highlight)', 'var(--ouds-charts-color-neutral)'] },
      se = {
        color: [
          'var(--ouds-charts-color-sequential-accent-3-tint-100)',
          'var(--ouds-charts-color-sequential-accent-3-tint-200)',
          'var(--ouds-charts-color-sequential-accent-3-tint-300)',
          'var(--ouds-charts-color-sequential-accent-3-tint-400)',
          'var(--ouds-charts-color-sequential-accent-3-tint-500)',
          'var(--ouds-charts-color-sequential-accent-3-tint-600)',
          'var(--ouds-charts-color-sequential-accent-3-tint-700)',
          'var(--ouds-charts-color-sequential-accent-3-tint-800)',
          'var(--ouds-charts-color-sequential-accent-3-tint-900)',
        ],
      },
      re = {
        color: [
          'var(--ouds-charts-color-sequential-accent-4-tint-100)',
          'var(--ouds-charts-color-sequential-accent-4-tint-200)',
          'var(--ouds-charts-color-sequential-accent-4-tint-300)',
          'var(--ouds-charts-color-sequential-accent-4-tint-400)',
          'var(--ouds-charts-color-sequential-accent-4-tint-500)',
          'var(--ouds-charts-color-sequential-accent-4-tint-600)',
          'var(--ouds-charts-color-sequential-accent-4-tint-700)',
          'var(--ouds-charts-color-sequential-accent-4-tint-800)',
          'var(--ouds-charts-color-sequential-accent-4-tint-900)',
        ],
      },
      ne = {
        color: [
          'var(--ouds-charts-color-categorical-tier-1)',
          'var(--ouds-charts-color-categorical-tier-6)',
          'var(--ouds-charts-color-categorical-tier-7)',
          'var(--ouds-charts-color-categorical-tier-2)',
          'var(--ouds-charts-color-categorical-tier-5)',
          'var(--ouds-charts-color-categorical-tier-10)',
        ],
      },
      ae = {
        color: [
          'var(--ouds-charts-color-sequential-accent-5-tint-100)',
          'var(--ouds-charts-color-sequential-accent-5-tint-200)',
          'var(--ouds-charts-color-sequential-accent-5-tint-300)',
          'var(--ouds-charts-color-sequential-accent-5-tint-400)',
          'var(--ouds-charts-color-sequential-accent-5-tint-500)',
          'var(--ouds-charts-color-sequential-accent-5-tint-600)',
          'var(--ouds-charts-color-sequential-accent-5-tint-700)',
          'var(--ouds-charts-color-sequential-accent-5-tint-800)',
          'var(--ouds-charts-color-sequential-accent-5-tint-900)',
        ],
      };
    var ie, le, ce;
    (!(function (e) {
      ((e.DEFAULT = 'default'),
        (e.CATEGORICAL = 'categorical'),
        (e.FUNCTIONAL = 'functional'),
        (e.SUPPORTING_COLORS = 'supportingColors'),
        (e.DARKER_TINTS = 'darkerTints'),
        (e.LIGHTER_TINTS = 'lighterTints'),
        (e.SEQUENTIAL_BLUE = 'blue'),
        (e.SEQUENTIAL_GREEN = 'green'),
        (e.SEQUENTIAL_PINK = 'pink'),
        (e.SEQUENTIAL_PURPLE = 'purple'),
        (e.SEQUENTIAL_YELLOW = 'yellow'),
        (e.OUDS_SEQUENTIAL_BLUE = 'oudsBlue'),
        (e.OUDS_SEQUENTIAL_GREEN = 'oudsGreen'),
        (e.OUDS_SEQUENTIAL_PINK = 'oudsPink'),
        (e.OUDS_SEQUENTIAL_PURPLE = 'oudsPurple'),
        (e.OUDS_SEQUENTIAL_YELLOW = 'oudsYellow'),
        (e.OUDS_CATEGORICAL = 'oudsCategorical'),
        (e.OUDS_FUNCTIONAL = 'oudsFunctional'),
        (e.OUDS_HIGHLIGHT = 'oudsHighlight'),
        (e.OUDS_SINGLE = 'oudsSingle'));
    })(ie || (ie = {})),
      (function (e) {
        ((e.BROKEN = 'broken'), (e.SMOOTH = 'smooth'), (e.BROKEN_WITH_POINTS = 'withPoints'));
      })(le || (le = {})),
      (function (e) {
        ((e.LIGHT = 'light'), (e.DARK = 'dark'), (e.DEFAULT = 'default'));
      })(ce || (ce = {})));
    const de = {
      common: { backgroundColor: 'var(--bs-body-bg, #fff)' },
      linesAxis: {
        categoryAxis: {
          axisLine: { show: !0, lineStyle: { color: 'var(--bs-border-color-subtle, #ccc)' } },
          axisLabel: { show: !0, color: 'var(--bs-body-color, #000000)' },
          axisTick: { show: !1, lineStyle: { color: 'var(--bs-border-color-subtle, #cccccc)' } },
        },
        valueAxis: {
          axisLine: { show: !0, lineStyle: { color: 'var(--bs-border-color-subtle, #cccccc)' } },
          axisLabel: { show: !0, color: 'var(--bs-body-color, #000000)' },
          axisTick: { show: !1, lineStyle: { color: 'var(--bs-border-color-subtle, #cccccc)' } },
        },
        logAxis: {
          axisLine: { show: !0, lineStyle: { color: 'var(--bs-border-color-subtle, #cccccc)' } },
          axisLabel: { show: !0, color: 'var(--bs-body-color, #000000)' },
          axisTick: { show: !1, lineStyle: { color: 'var(--bs-border-color-subtle, #cccccc)' } },
        },
        timeAxis: {
          axisLine: { show: !0, lineStyle: { color: 'var(--bs-border-color-subtle, #cccccc)' } },
          axisLabel: { show: !0, color: 'var(--bs-body-color, #000000)' },
          axisTick: { show: !1, lineStyle: { color: 'var(--bs-border-color-subtle, #cccccc)' } },
        },
      },
      colors: {
        default: Z,
        categorical: Y,
        functional: K,
        supportingColors: Q,
        darkerTints: W,
        lighterTints: j,
        blue: G,
        green: R,
        pink: V,
        purple: z,
        yellow: U,
        oudsBlue: J,
        oudsGreen: oe,
        oudsPink: se,
        oudsPurple: re,
        oudsYellow: ae,
        oudsCategorical: X,
        oudsFunctional: ee,
        oudsHighlight: te,
        oudsSingle: ne,
      },
      visualMapColors: {
        default: { visualMapColor: Z.color },
        categorical: { visualMapColor: Y.color },
        functional: { visualMapColor: K.color },
        supportingColors: { visualMapColor: Q.color },
        darkerTints: { visualMapColor: W.color },
        lighterTints: { visualMapColor: j.color },
        blue: { visualMapColor: G.color },
        green: { visualMapColor: R.color },
        pink: { visualMapColor: V.color },
        purple: { visualMapColor: z.color },
        yellow: { visualMapColor: U.color },
        oudsBlue: { visualMapColor: J.color },
        oudsGreen: { visualMapColor: oe.color },
        oudsPink: { visualMapColor: se.color },
        oudsPurple: { visualMapColor: re.color },
        oudsYellow: { visualMapColor: ae.color },
        oudsCategorical: { visualMapColor: X.color },
        oudsFunctional: { visualMapColor: ee.color },
        oudsHighlight: { visualMapColor: te.color },
        oudsSingle: { visualMapColor: ne.color },
      },
      linesStyle: {
        broken: { line: { itemStyle: { borderWidth: 1 }, lineStyle: { width: 2 }, symbolSize: 0, symbol: 'circle', smooth: !1 } },
        withPoints: { line: { itemStyle: { borderWidth: 1 }, lineStyle: { width: 2 }, symbolSize: '10', symbol: 'circle', smooth: !1 } },
        smooth: { line: { itemStyle: { borderWidth: 1 }, lineStyle: { width: 2 }, symbolSize: 0, symbol: 'circle', smooth: !0 } },
      },
    };
    class he {
      constructor(e, o, t) {
        ((this.name = e),
          (this.initialTheme = o),
          (this.options = t),
          (this.chartLegendManager = void 0),
          (this.chartResizeManager = void 0),
          (this.chartPopoverManager = void 0),
          (this.chartThemeObserver = void 0),
          (this.cssThemeName = Object.keys(c).find((e) => c[e] === t.cssTheme) || s.CUSTOM),
          (this.cssHelper = new H(this.options.cssSelector, this.options.mode, this.cssThemeName)),
          (this.theme = this.calculateTheme()));
      }
      calculateTheme() {
        return ((this.theme = this.cssHelper.replaceAllCssVars(f(this.initialTheme))), this.theme);
      }
      static getDarkOrLightMode(e) {
        let o = ce.DEFAULT;
        if (e) {
          const t = window.getComputedStyle(e);
          if (t) {
            const e = t.getPropertyValue('color-scheme');
            [ce.DARK, ce.LIGHT].includes(e) && (o = e);
          }
        }
        return o;
      }
      static getThemeManager(e) {
        e || (e = {});
        let o = ce.DEFAULT;
        (e.colors || (e.colors = ie.DEFAULT),
          e.chartConfiguration || (e.chartConfiguration = fe.getDefaultChartConfiguration()),
          e.cssTheme || (e.cssTheme = c.NONE),
          e.cssSelector || (e.cssSelector = 'body'),
          (o = he.getDarkOrLightMode(document.querySelector(e.cssSelector))));
        var s = `ods.${b(e.colors)}.${b(e.chartConfiguration)}`;
        const r = f(t);
        return (
          p(r, f(de.common)),
          p(r, f(de.linesAxis)),
          'string' == typeof e.colors
            ? (p(r, f(de.colors[e.colors])), p(r, f(de.visualMapColors[e.colors])))
            : p(
                r,
                f({
                  color: e.colors.map((e) => ('string' == typeof e ? e : de.colors[e.colorPalette].color[e.colorIndex])),
                  visualMapColor: e.colors.map((e) => ('string' == typeof e ? e : de.visualMapColors[e.colorPalette].visualMapColor[e.colorIndex])),
                })
              ),
          p(r, f(de.linesStyle[e.chartConfiguration.lineStyle ? e.chartConfiguration.lineStyle : e.lineStyle ? e.lineStyle : le.SMOOTH])),
          new he(v(s), r, Object.assign(Object.assign({}, e), { mode: o }))
        );
      }
      setDataOptions(e) {
        return ((this.dataOptions = e), this);
      }
      getDisplayedColors(e, o) {
        const t = f(e);
        if (o && o.series)
          for (let e = 0; e < o.series.length; e++) {
            const s = o.series[e];
            if (s.itemStyle && s.itemStyle.color && s.itemStyle.color !== t[e]) {
              const o = t.indexOf(s.itemStyle.color);
              (o > -1 && t.splice(o, 1), t.splice(e, 0, s.itemStyle.color));
            }
          }
        return t;
      }
      calculateNewThemeAndAddItInThemeOptions(e, o) {
        var t, s;
        const r = this.calculateTheme();
        if (
          (p(
            e,
            { color: r.color, backgroundColor: r.backgroundColor, title: r.title, grid: { tooltip: r.tooltip } },
            null === (t = this.options.chartConfiguration) || void 0 === t ? void 0 : t.getDefaultConfiguration()
          ),
          o.toolbox && (e.toolbox = r.toolbox),
          o.timeline && (e.timeline = r.timeline),
          o.series)
        ) {
          e.series = [];
          for (let t = 0; t < o.series.length; t++) {
            switch (((e.series[t] = {}), o.series[t].type)) {
              case 'line':
                e.series[t] = Object.assign(Object.assign({}, r.line), { markPoint: r.markPoint });
                break;
              case 'bar':
                e.series[t] = r.bar;
                break;
              case 'pie':
                e.series[t] = r.pie;
                break;
              case 'scatter':
                e.series[t] = r.scatter;
                break;
              case 'boxplot':
                e.series[t] = r.boxplot;
                break;
              case 'sankey':
                e.series[t] = r.sankey;
                break;
              case 'funnel':
                e.series[t] = r.funnel;
                break;
              case 'gauge':
                e.series[t] = r.gauge;
                break;
              case 'candlestick':
                e.series[t] = r.candlestick;
                break;
              case 'graph':
                e.series[t] = r.graph;
                break;
              case 'treemap':
                e.series[t] = r.map;
            }
            e.series[t] = Object.assign(
              Object.assign({}, e.series[t]),
              null === (s = this.options.chartConfiguration) || void 0 === s ? void 0 : s.getSerieConfiguration(o.series[t])
            );
          }
        }
        if (o.visualMap) {
          e.visualMap = [];
          for (let t = 0; t < o.series.length; t++) e.visualMap[t] = r.visualMap;
        }
        for (const t of ['xAxis', 'yAxis'])
          if (o[t])
            switch (o[t].type) {
              case 'category':
                e[t] = p(e[t], r.categoryAxis);
                break;
              case 'value':
                e[t] = p(e[t], r.valueAxis);
                break;
              case 'log':
                e[t] = p(e[t], r.logAxis);
                break;
              case 'time':
                e[t] = p(e[t], r.timeAxis);
            }
        return r;
      }
      getThemeOptions() {
        if (!this.dataOptions) throw new Error('the chart basic options must be set to get the theme completion');
        this.chartThemeObserver &&
          ((this.options.mode = he.getDarkOrLightMode(this.chartThemeObserver.addThemeObserver())), this.cssHelper.changeThemeMode(this.options.mode));
        const e = this.cssHelper.initComputedStyle();
        try {
          const e = this.cssHelper.cloneAndReplaceAllCssVars(Object.assign({}, this.dataOptions));
          ((e.xAxis = e.xAxis ? f(e.xAxis) : {}),
            (e.yAxis = e.yAxis ? f(e.yAxis) : {}),
            (e.legend = e.legend ? f(e.legend) : {}),
            (e.grid = e.grid ? f(e.grid) : {}));
          const o = {
              fontStyle: 'normal',
              fontWeight: 'var(--bs-body-font-weight, 400)',
              fontSize: 14,
              fontFamily: 'Helvetica Neue, sans-serif',
              color:
                ce.DEFAULT === this.options.mode
                  ? 'var(--bs-body-color, #000)'
                  : ce.LIGHT === this.options.mode
                    ? 'var(--bs-black, #000)'
                    : 'var(--bs-white, #fff)',
            },
            t = {
              show: !0,
              lineStyle: {
                width: 2,
                color:
                  ce.DEFAULT === this.options.mode
                    ? 'var(--bs-border-color-subtle, #ccc)'
                    : ce.LIGHT === this.options.mode
                      ? 'var(--bs-gray-500, #ccc)'
                      : 'var(--bs-gray-700, #666)',
              },
            },
            s = {
              show: !0,
              lineStyle: {
                width: 1,
                color:
                  ce.DEFAULT === this.options.mode
                    ? 'var(--bs-border-color-subtle, #ccc)'
                    : ce.LIGHT === this.options.mode
                      ? 'var(--bs-gray-500, #ccc)'
                      : 'var(--bs-gray-700, #666)',
              },
            },
            r = { left: 50, right: 50, top: 50, bottom: 30 },
            n = {
              textStyle: {
                fontWeight: 'bold',
                fontSize: 14,
                color:
                  ce.DEFAULT === this.options.mode
                    ? 'var(--bs-body-color, #000)'
                    : ce.LIGHT === this.options.mode
                      ? 'var(--bs-black, #000)'
                      : 'var(--bs-white, #fff)',
                padding: [0, 0, 0, 5],
              },
              icon: 'rect',
              itemWidth: 12,
              itemHeight: 12,
            };
          this.chartLegendManager ||
            ('horizontal' === ((e.legend && e.legend.orient) || 'horizontal')
              ? ((n.orient = 'horizontal'),
                (n.bottom = 20),
                (n.left = 0),
                (n.padding = [0, 40, 10, 40]),
                (n.formatter = function (e) {
                  return e + '   ';
                }),
                (r.bottom = 100))
              : ((n.orient = 'vertical'), (n.right = 50), (n.itemGap = 12), (n.top = 30), (r.right = 200)));
          let a = { xAxis: { axisLabel: f(o) }, yAxis: { axisLabel: f(o) }, legend: f(n), grid: f(r) },
            i = this.calculateNewThemeAndAddItInThemeOptions(a, e);
          for (const o of ['xAxis', 'yAxis'])
            A(e[o]) || (e[o] && e[o].axisLine)
              ? ((a[o].axisLine = f(t)), (a[o].splitLine = f(s)))
              : ((a[o].axisLine = { show: !1 }), (a[o].splitLine = { show: !1 }));
          const l = this.getDisplayedColors(i.color, e);
          if (((a = this.cssHelper.replaceAllCssVars(a)), this.chartLegendManager))
            try {
              this.chartLegendManager.addLegend(e, l, this.options.cssTheme, this.cssThemeName, this.options.mode);
            } catch (e) {
              console.error('unable to init Legend Manager', e);
            }
          if (this.chartResizeManager)
            try {
              this.chartResizeManager.addResizeManagement();
            } catch (e) {
              console.error('unable to init Resize Manager', e);
            }
          if (this.chartPopoverManager)
            try {
              this.chartPopoverManager.addPopoverManagement(e, a, this.options.cssTheme, this.cssThemeName, this.options.mode);
            } catch (e) {
              console.error('unable to init Popover Manager', e);
            }
          return { themeOptions: a, dataOptions: e };
        } finally {
          e && this.cssHelper.removeComputedStyle();
        }
      }
      externalizeLegends(e, o) {
        return ((this.chartLegendManager = u.addLegend(e, o)), this);
      }
      externalizePopover(e = {}, o) {
        return (o || (o = D.NONE), (this.chartPopoverManager = T.addPopoverManagement(o, e)), this);
      }
      manageChartResize(e, o) {
        return ((this.chartResizeManager = g.addResizeManagement(e, o)), this);
      }
      manageThemeObserver(e) {
        return (
          (this.chartThemeObserver = P.addThemeObserver(e, () => {
            e.setOption(this.getChartOptions());
          })),
          this
        );
      }
      getChartOptions() {
        if (!this.dataOptions) throw new Error('the chart basic options must be set to get the theme completion');
        const { themeOptions: e, dataOptions: o } = this.getThemeOptions();
        return p(e, o);
      }
    }
    class pe {
      constructor(e, o, t, s) {
        ((this.legendHolderSelector = e), (this.orientation = o), (this.seriesRef = t), (this.postItemContent = s));
      }
    }
    var ue;
    !(function (e) {
      ((e.DEFAULT = 'DEFAULT'),
        (e.LINE = 'LINE'),
        (e.BAR = 'BAR'),
        (e.LINE_AND_BAR = 'LINE_AND_BAR'),
        (e.PIE = 'PIE'),
        (e.DONUT = 'DONUT'),
        (e.HORIZONTAL_GAUGE = 'HORIZONTAL_GAUGE'),
        (e.SEMI_CIRCULAR_GAUGE = 'SEMI_CIRCULAR_GAUGE'),
        (e.CIRCULAR_GAUGE = 'CIRCULAR_GAUGE'),
        (e.DIAL_GAUGE = 'DIAL_GAUGE'));
    })(ue || (ue = {}));
    class ge {}
    class ve {}
    class be extends ve {}
    class fe {
      constructor(e = ue.DEFAULT) {
        this.type = e;
      }
      getDefaultConfiguration() {
        return {};
      }
      getSerieConfiguration(e) {
        return {};
      }
      static getDefaultChartConfiguration() {
        return new fe();
      }
      static getLineChartConfiguration(e = { lineStyle: le.SMOOTH }) {
        return new Ce(e.lineStyle);
      }
      static getBarChartConfiguration() {
        return new we();
      }
      static getLineAndBarChartConfiguration(e = { lineStyle: le.SMOOTH }) {
        return new me(e.lineStyle);
      }
      static getPieChartConfiguration() {
        return new Se();
      }
      static getDonutChartConfiguration() {
        return new Le();
      }
      static getHorizontalGaugeChartConfiguration(e) {
        return new De(e.minValue, e.maxValue);
      }
      static getSemiCircularGaugeChartConfiguration(e) {
        return new Ae(e.minValue, e.maxValue);
      }
      static getCircularGaugeChartConfiguration(e) {
        return new Te(e.minValue, e.maxValue);
      }
      static getDialGaugeChartConfiguration(e) {
        return new Ee(e.minValue, e.maxValue, e.dialPoints);
      }
    }
    class ye extends fe {
      constructor(e = ue.LINE, o) {
        (super(e), (this.lineStyle = o), void 0 === this.lineStyle && (this.lineStyle = le.SMOOTH));
      }
    }
    class me extends ye {
      constructor(e) {
        super(ue.LINE_AND_BAR, e);
      }
    }
    class Ce extends ye {
      constructor(e) {
        super(ue.LINE, e);
      }
    }
    class xe extends fe {
      constructor(e) {
        super(e);
      }
    }
    class we extends xe {
      constructor() {
        super(ue.BAR);
      }
    }
    class Se extends fe {
      getSerieConfiguration(e) {
        return 'pie' !== e.type ? {} : { label: { show: !1, position: 'outside' }, labelLine: { show: !1 }, radius: ['0%', '95%'] };
      }
      constructor() {
        super(ue.PIE);
      }
    }
    class Le extends fe {
      getSerieConfiguration(e) {
        return 'pie' !== e.type
          ? {}
          : {
              label: { show: !1, position: 'center' },
              labelLine: { show: !1 },
              emphasis: { label: { show: !0, fontSize: 35, fontWeight: 700, formatter: '{d}%' } },
              radius: ['80%', '95%'],
            };
      }
      constructor() {
        super(ue.DONUT);
      }
    }
    class ke extends fe {
      constructor(e) {
        super(e);
      }
    }
    class De extends ke {
      constructor(e, o) {
        (super(ue.HORIZONTAL_GAUGE), (this.minValue = e), (this.maxValue = o));
      }
      getDefaultConfiguration() {
        return {
          grid: { left: 20, top: 32, right: 20, height: 32 },
          yAxis: {
            show: !0,
            type: 'category',
            axisLabel: { margin: 0, lineHeight: 50, inside: !0, verticalAlign: 'bottom' },
            axisLine: { show: !1 },
            splitLine: { show: !1 },
          },
          xAxis: Object.assign(
            Object.assign(
              Object.assign({ type: 'value', position: 'top' }, void 0 !== this.minValue ? { min: this.minValue } : {}),
              void 0 !== this.maxValue ? { max: this.maxValue } : {}
            ),
            {
              splitNumber: 1,
              axisLine: { show: !1 },
              axisTick: { show: !1 },
              splitLine: { show: !1 },
              axisLabel: { formatter: (e) => ((this.minValue || 0) === e ? '' : e), align: 'right', show: !0, lineHeight: 0, fontWeight: 'normal' },
            }
          ),
        };
      }
      getSerieConfiguration(e) {
        return 'bar' !== e.type
          ? {}
          : { pointer: { show: !1 }, barWidth: 32, showBackground: !0, backgroundStyle: { color: 'var(--bs-gray-500)' }, itemStyle: { barBorderWidth: 0 } };
      }
    }
    class Oe extends fe {
      constructor(e = ue.SEMI_CIRCULAR_GAUGE, o, t) {
        (super(e), (this.minValue = o), (this.maxValue = t));
      }
      getSerieConfiguration(e) {
        if ('gauge' !== e.type) return {};
        const o = ue.CIRCULAR_GAUGE === this.type;
        return {
          endAngle: o ? -270 : 0,
          startAngle: o ? 90 : 180,
          min: void 0 !== e.min ? e.min : void 0 !== this.minValue ? this.minValue : 0,
          max: void 0 !== e.max ? e.max : void 0 !== this.maxValue ? this.maxValue : 100,
          radius: o ? '90%' : '150%',
          center: ['50%', o ? '50%' : '75%'],
          splitNumber: 1,
          detail: {
            offsetCenter: [0, o ? 0 : -10],
            color: 'var(--bs-body-color, #000)',
            fontSize: 40,
            fontFamily: 'var(--bs-font-sans-serif, "Helvetica Neue")',
            fontWeight: 'bold',
          },
          progress: { show: !0, width: 32 },
          splitLine: { show: !1 },
          axisTick: { show: !1 },
          pointer: { show: !1 },
          axisLabel: {
            show: !o,
            distance: -50,
            color: 'var(--bs-body-color, #000)',
            fontSize: 14,
            fontFamily: 'var(--bs-font-sans-serif, "Helvetica Neue")',
            fontWeight: 400,
          },
          axisLine: { roundCap: !1, lineStyle: { width: 32, color: [[1, 'var(--bs-light)']] } },
        };
      }
    }
    class Ae extends Oe {
      constructor(e, o) {
        super(ue.SEMI_CIRCULAR_GAUGE, e, o);
      }
    }
    class Ee extends Oe {
      constructor(e, o, t) {
        (super(ue.DIAL_GAUGE, e, o),
          (this.dialPoints = t),
          void 0 === e && t && t.length > 1 && (this.minValue = t[0].value),
          void 0 === o && t && t.length > 0 && (this.maxValue = t[t.length - 1].value));
      }
      gcd(e, o) {
        for (e = Math.abs(e), o = Math.abs(o); 0 !== o; ) {
          const t = o;
          ((o = e % o), (e = t));
        }
        return e;
      }
      gcdArray(e) {
        return e.reduce((e, o) => this.gcd(e, o), e[0]);
      }
      getSerieConfiguration(e) {
        if ('gauge' !== e.type) return {};
        const o = super.getSerieConfiguration(e),
          t = o.min,
          s = o.max,
          r = this.dialPoints && 0 < this.dialPoints.length ? this.dialPoints : [{ value: t }, { value: s }];
        (t !== r[0].value && r.unshift({ value: t }), s !== r[r.length - 1].value && r.push({ value: s }));
        const n = r.reduce((e, o, t) => (t > 0 && e.push(o.value - r[t - 1].value), e), []),
          a = this.gcdArray(n),
          i = (s - t) / a;
        return Object.assign(Object.assign({}, o), {
          radius: '125%',
          splitNumber: i,
          detail: {
            offsetCenter: [0, 30],
            color: 'var(--bs-body-color, #000)',
            fontSize: 40,
            fontFamily: 'var(--bs-font-sans-serif, "Helvetica Neue")',
            fontWeight: 'bold',
          },
          progress: { show: !1 },
          pointer: {
            show: !0,
            width: 50,
            icon: 'var(--ods-dial-gauge-pointer, image://data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22147%2065.2635%2023%20104.4226%22%20width%3D%2223px%22%20height%3D%22107.735px%22%3E%0A%20%20%3Cpath%20d%3D%22M%20123.034%2079.908%20L%20179.603%20150.618%20L%20193.745%20136.476%20L%20123.034%2079.908%20Z%22%20fill%3D%22%23000%22%20style%3D%22stroke-width%3A%201%3B%20transform-origin%3A%20158.389px%20115.263px%3B%22%20transform%3D%22matrix(0.70710701%2C%200.70710701%2C%20-0.70710701%2C%200.70710701%2C%200.00000871%2C%20-0.0000095)%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%22131.469%22%20cy%3D%2290.553%22%20r%3D%2210%22%20fill%3D%22%23000%22%20style%3D%22stroke-width%3A%201%3B%20transform-origin%3A%20131.469px%2090.553px%3B%22%20transform%3D%22matrix(-0.70710701%2C%20-0.70710701%2C%200.70710701%2C%20-0.70710701%2C%2026.91516753%2C%2064.99089065)%22%2F%3E%0A%3C%2Fsvg%3E)',
            itemStyle: { color: 'var(--bs-body-color, #000)' },
            offsetCenter: [0, 0],
          },
          axisLabel: {
            show: !0,
            distance: -40,
            color: 'var(--bs-body-color, #000)',
            fontSize: 14,
            fontFamily: 'var(--bs-font-sans-serif, "Helvetica Neue")',
            fontWeight: 400,
            formatter: function (e) {
              const o = r.find((o) => e === o.value);
              return o && o.label ? o.label : '';
            },
          },
          axisLine: {
            roundCap: !1,
            lineStyle: {
              width: 32,
              color: r.reduce((e, o, n) => {
                if (n > 0 && o.beforeColor) {
                  const a = o.value / (s - t);
                  r.length - 1 === n ? e.push([a, o.beforeColor]) : (e.push([a - 0.002, o.beforeColor]), e.push([a + 0.002, 'transparent']));
                } else r.length - 1 === n && e.push([1, 'var(--bs-light)']);
                return e;
              }, []),
            },
          },
        });
      }
    }
    class Te extends Oe {
      constructor(e, o) {
        super(ue.CIRCULAR_GAUGE, e, o);
      }
    }
    const Pe = he.getThemeManager;
    return o;
  })()
);
//# sourceMappingURL=ods-charts.js.map
